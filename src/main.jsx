import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import Upcoming from './pages/Upcoming.jsx';
import Detail from './pages/Detail.jsx';
import Series from './pages/Series.jsx';
import SeriesDetail from './pages/SeriesDetail.jsx';
import Popular from './pages/Popular.jsx';
import TopRated from './pages/TopRated.jsx';
import Wishlist from './pages/Wishlist.jsx';
import LoginComponent from './components/Login.jsx';
import RegisterComponent from './components/Register.jsx';
//import App2 from './pages/Auth.jsx';
import Profile from './pages/Profile.jsx';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/cineVista",
    element: <App />,
    children: [
      {
        path: "/cineVista",
        element: <Home />,
      },
      {
        path: "/cineVista/upcoming",
        element: <Upcoming />,
      },
      {
        path: "/cineVista/detail/:id",
        element: <Detail />,
      },
      {
        path: "/cineVista/series",
        element: <Series />,
      },
      {
        path: "/cineVista/series/:id",
        element: <SeriesDetail />,
      },
      {
        path: "/cineVista/popular",
        element: <Popular />,
      },
      {
        path: "/cineVista/toprated",
        element: <TopRated />,
      },
      {
        path: "/cineVista/wishlist",
        element: <Wishlist />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <LoginComponent />,
    children: [
      {
        path: "/register",
        element: <RegisterComponent />,
      },
      {
        path: "/login",
        element: <LoginComponent />,
      },
      {
        path: "/profile",
        element:<Profile />
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
