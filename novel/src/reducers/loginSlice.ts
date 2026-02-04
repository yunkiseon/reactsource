import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { LoginForm, LoginResponse } from "../types/user";
import { postLogin } from "../apis/userApis";
import { getCookie, removeCookie, setCookie } from "../utils/cookieUtil";

// 초기값 설정
const initialState: LoginResponse = {
  email: "",
  nickname: "",
  social: false,
  roles: [],
  accessToken: "",
};

// 비동기 호출 : 동기와 달리조건이 없어도 계속해서 실행준비
export const loginPostAsync = createAsyncThunk<LoginResponse, LoginForm>(
  "loginPostAsync",
  (param) => {
    return postLogin(param);
  },
);

// 쿠키 값 가져오기
const loadMemberCookie = () => {
  const member = getCookie("member");
  if (!member) return null;
  return member;
};

export const loginSlice = createSlice({
  name: "auth",
  initialState: loadMemberCookie() || initialState,
  reducers: {
    login: (state, action) => {
      console.log("login");
      // loginParam 가져오기
      const { email, pw } = action.payload;
      state.email = email;
    },
    logout: (state) => {
      console.log("logout");
      removeCookie("member");
      state.email = "";
    },
  },

  // 비동기 action 처리에 대한 상태관리를 하고 싶을 때
  // fullfilled : 성공, pending : 대기, rejected: 거부
  extraReducers(builder) {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fullfilled");
        state.email = action.payload.email;
        state.nickname = action.payload.nickname;
        state.social = action.payload.social;
        state.accessToken = action.payload.accessToken;
        state.roles = action.payload.roles;

        if (action.payload.accessToken) {
          setCookie("member", JSON.stringify(action.payload), 1);
        }
      })
      .addCase(loginPostAsync.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log("rejected");
      });
  },
});

//  외부에서 사용할 수 있도록 함수(action) 내보내기
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
