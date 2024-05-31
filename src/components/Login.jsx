import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Firebase.jsx";
import { toast } from "react-toastify";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successful");
      window.location.href = "/cineVista";
      toast.success("User loggedIn successfully"),
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        };
    }
    catch(error){
      console.log(error.message);
      toast.error(error.message),
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        };
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
      >
        <h3 className="text-2xl font-semibold text-center mb-6">Login</h3>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Email address
          </label>
          <input
            type="email"
            className="form-control w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            className="form-control w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="btn btn-primary w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>

        <p className="mt-4 text-right">
          New user{" "}
          <a href="/register" className="text-indigo-600 hover:underline">
            Register Here
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginComponent;
