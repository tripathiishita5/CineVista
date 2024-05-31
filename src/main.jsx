import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import Upcoming from "./pages/Upcoming.jsx";
import Detail from "./pages/Detail.jsx";
import Series from "./pages/Series.jsx";
import SeriesDetail from "./pages/SeriesDetail.jsx";
import Popular from "./pages/Popular.jsx";
import TopRated from "./pages/TopRated.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import LoginComponent from "./components/Login.jsx";
import RegisterComponent from "./components/Register.jsx";
import Profile from "./pages/Profile.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./components/Firebase.jsx";

function Main() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/cineVista",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "upcoming",
          element: <Upcoming />,
        },
        {
          path: "detail/:id",
          element: <Detail />,
        },
        {
          path: "series",
          element: <Series />,
        },
        {
          path: "series/:id",
          element: <SeriesDetail />,
        },
        {
          path: "popular",
          element: <Popular />,
        },
        {
          path: "toprated",
          element: <TopRated />,
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
      errorElement: <Error />,
    },
    {
      path: "/",
      element: user ? <Navigate to="/profile" /> : <LoginComponent />,
    },
    {
      path: "/register",
      element: <RegisterComponent />,
    },
    {
      path: "/login",
      element: <LoginComponent />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
    </React.StrictMode>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<Main />);