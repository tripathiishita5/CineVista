// Main.jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./App";
import "./index.css";
import { AuthProvider } from "./AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./components/Firebase";

function Main() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <React.StrictMode>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
        <ToastContainer />
      </AuthProvider>
    </React.StrictMode>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<Main />);
