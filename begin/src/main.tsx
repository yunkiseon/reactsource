import { configureStore } from '@reduxjs/toolkit';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import MyTodo from './redux/component/MyTodo.tsx';
import rootReducer from './redux/modules/index.ts';

// store : 애플리케이션 당 하나의 스토어
// 데이터 공유
const store = configureStore({
  reducer: rootReducer,
});

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <MyTodo />,
  </Provider>,
  // <Consumer />,
);
