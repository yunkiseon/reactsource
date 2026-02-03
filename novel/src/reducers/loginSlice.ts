import { createSlice } from "@reduxjs/toolkit";
import type { LoginResponse } from "../types/user";

// 초기값 설정
const initialState: LoginResponse = {
  email: "",
  nickname: "",
  social: false,
  roles: [],
  accessToken: "",
};
export const loginSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log("login");
      // loginParam 가져오기
      const { email, pw } = action.payload;
      state.email = email;
    },
    logout: (state) => {
      console.log("logout");
      state.email = "";
    },
  },
});

//  외부에서 사용할 수 있도록 함수(action) 내보내기
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
