import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './router/declarative/Navbar.tsx';
import router from './router/data/routes.ts';
import Consumer from './context/Consumer.tsx';

createRoot(document.getElementById('root')!).render(
  //   <BrowserRouter>
  // <Navbar />
  // </BrowserRouter>,
  <Consumer />,
);
