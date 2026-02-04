import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import { getCookie, setCookie } from "./cookieUtil";
import { data } from "react-router-dom";

const jwtAxios = axios.create();
const host = "http://localhost:8080";
const refreshJWT = async (accessToken: string, refreshToken: string) => {
  const header = { headers: { Authorization: `Bearer ${accessToken}` } };
  const res = await axios.get(`${host}/api/member/refresh?refreshToken=${refreshToken}`, header);
  return res.data;
};

const requestFail = (err: AxiosError) => {
  console.log("request error");
  return Promise.reject(err);
};
const responseFail = (err: AxiosError) => {
  console.log("response error");
  return Promise.reject(err);
};

const beforeReq = (config: InternalAxiosRequestConfig) => {
  console.log("before request");
  const member = getCookie("member");
  if (!member) {
    return Promise.reject({
      response: {
        data: { error: "실패" },
      },
    });
  }
  // 쿠키가 있다면 쿠키에서 accessToken 만 가져오기
  const { accessToken } = member;
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

// 쿠키 리프레쉬 -> 기간이 지나면 사용자가 모르게 쿠키를 다시 받아오기
// 브라우저의 쿠키인 token들을 다시 세팅 해주는 것.
const beforeRes = async (res: AxiosResponse<unknown>): Promise<AxiosResponse<unknown>> => {
  console.log("before return reponse....");
  const data = res.data as { error?: string };
  if (data?.error === "ERROR_ACCESS_TOKEN") {
    const memberCookieVal = getCookie("member");
    const result = await refreshJWT(memberCookieVal.accessToken, memberCookieVal.refreshToken);
    memberCookieVal.accessToken = result.accessToken;
    memberCookieVal.refreshToken = result.refreshToken;
    setCookie("member", JSON.stringify(memberCookieVal), 1);
    const originRequest = res.config;
    originRequest.headers.Authorization = `Bearer ${result.accessToken}`;
    return await axios(originRequest);
  }
  return res;
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
