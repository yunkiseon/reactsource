import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./loginSlice";
// useState => useContext => react-redux
// store:  애플리케이션 내에 공유되는 상태 데이터
// reducer : 공유되는 상태 데이터를 처리 담당하는 함수
// slice : 리듀서 + action(리듀서 호출)
export const store = configureStore({
  reducer: {
    auth: loginSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
