import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/organism/Navbar';
import AppLogin from './pages/login';
import AppRegister from './pages/register';
import ErrorPage from './pages/error';
import ProductPage from './pages/product';
import App from './App';
import { ProfilePage } from './pages/profile';
import DetailProductPage from './pages/detailProduct';
import CharaPage from './pages/chara';
import RickMortyPage from './pages/RickMorty';
import DetailRickMortyPage from './pages/detailRickMorty';



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
  {
    path: `/product/:id`,
    element: <DetailProductPage />,
  },
  {
    path: `/character`,
    element: <CharaPage />,
  },  {
    path: `/rickandmorty/:id`,
    element: <DetailRickMortyPage />,
  },{
    path: `/rickandmorty`,
    element: <RickMortyPage />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Navbar type="header"/>
    <RouterProvider router={router} />
    <Navbar type="footer"/>
    </Provider>
  </React.StrictMode>,
)
