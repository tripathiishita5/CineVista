// ProtectedRoute.js
import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const ProtectedRoute = ({ component: Component }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return isAuthenticated ? (
    <>
      <Navbar />
      <Component />
      <Footer />
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoute;
