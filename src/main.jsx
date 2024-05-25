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
