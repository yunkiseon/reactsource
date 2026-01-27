import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './router/declarative/Navbar.tsx';
import router from './router/data/routes.ts';
import Consumer from './context/Consumer.tsx';
import AuthProvider from './router/data/AuthContext.tsx';
import { Provider } from 'react-redux';
import App from './App.tsx';
import MyTodo from './redux/component/MyTodo.tsx';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/modules/index.ts';

const store = configureStore({
  reducer: rootReducer,
});
createRoot(document.getElementById('root')!).render(
  //   <BrowserRouter>
  // <Navbar />
  // </BrowserRouter>,
  // <Consumer />,
  // <AuthProvider>
  //   <RouterProvider router={router} />,
  // </AuthProvider>,
  <Provider store={store}>
    <MyTodo />
  </Provider>,
);
