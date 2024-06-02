// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Upcoming from "./pages/Upcoming";
import Detail from "./pages/Detail";
import Series from "./pages/Series";
import SeriesDetail from "./pages/SeriesDetail";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import LoginComponent from "./components/Login";
import RegisterComponent from "./components/Register";
import { useAuth } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={!isAuthenticated ? <LoginComponent /> : <Navigate to="/" />}
      />
      <Route path="/register" element={<RegisterComponent />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/upcoming"
        element={
          <ProtectedRoute>
            <Upcoming />
          </ProtectedRoute>
        }
      />
      <Route
        path="/detail/:id"
        element={
          <ProtectedRoute>
            <Detail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/series"
        element={
          <ProtectedRoute>
            <Series />
          </ProtectedRoute>
        }
      />
      <Route
        path="/series-detail/:id"
        element={
          <ProtectedRoute>
            <SeriesDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/popular"
        element={
          <ProtectedRoute>
            <Popular />
          </ProtectedRoute>
        }
      />
      <Route
        path="/toprated"
        element={
          <ProtectedRoute>
            <TopRated />
          </ProtectedRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
