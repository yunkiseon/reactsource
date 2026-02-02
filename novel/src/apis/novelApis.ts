// 서버 연동 담당

import axios from "axios";
import type { Novel, NovelPut, PageRequestDTO } from "../types/book";

export const API_SERVER_HOST = "http://localhost:8080/api/novels";

// 전체 목록 조회
export const getList = async (pageParam: PageRequestDTO) => {
  const { page, size, genre, keyword } = pageParam;

  const res = await axios.get(API_SERVER_HOST, {
    params: { page: page, size: size, genre: genre, keyword: keyword },
  });
  console.log("서버 도착 ", res);
  return res.data;
};

// 하나 조회

export const getRow = async (id: string) => {
  const res = await axios.get(`${API_SERVER_HOST}/${id}`);
  console.log("서버 도착 ", res);
  return res.data;
};

// 업데이트 2

export const putAvailable = async (novelObj: NovelPut) => {
  const result = await axios.put(`${API_SERVER_HOST}/available/${novelObj.id}`, novelObj);
  return result.data;
};

// 이용가능 여부/ 장르변경

export const putNovel = async (novelObj: NovelPut) => {
  const result = await axios.put(`${API_SERVER_HOST}/edit/${novelObj.id}`, novelObj);
  return result.data;
};

// 삭제
export const deleteOne = async (id: number) => {
  const result = await axios.delete(`${API_SERVER_HOST}/${id}`);
  return result.data;
};

// 삽입
export const postNovel = async (novelObj: Novel) => {
  const result = await axios.post(`${API_SERVER_HOST}/add`, novelObj);
  return result.data;
};
