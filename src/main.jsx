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

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/upcoming",
        element: <Upcoming/>,
      },
      {
        path: "/detail/:id",
        element: <Detail/>,
      },
      {
        path: "/series",
        element: <Series/>,
      },
      {
        path: "/series/:id",
        element: <SeriesDetail/>,
      },
      {
        path: "/popular",
        element: <Popular/>,
      },
      {
        path: "/toprated",
        element: <TopRated/>,
      },
      {
        path: "/wishlist",
        element: <Wishlist/>,
      }
    ],
    errorElement:<Error/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
