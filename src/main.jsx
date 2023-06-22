import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/organism/Navbar';
import AppLogin from './pages/login';
import AppRegister from './pages/register';
import ErrorPage from './pages/error';
import ProductPage from './pages/product';
import Header from './components/molecules/Header';
import Footer from './components/molecules/Footer';
import App from './App';
import { ProfilePage } from './pages/profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
  {
    path: "/profile",
    element: <ProfilePage/>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar type="header"/>
    <RouterProvider router={router} />
    <Navbar type="footer"/>
  </React.StrictMode>,
)
