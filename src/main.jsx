import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppLogin from './pages/login';
import AppRegister from './pages/register';
import ErrorPage from './pages/error';
import ProductPage from './pages/product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement:<ErrorPage/>,
  },
  {
    path: "/login",
    element: <AppLogin/>,
  },
  {
    path: "/register",
    element: <AppRegister/>,
  },
  {
    path: "/product",
    element: <ProductPage/>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
