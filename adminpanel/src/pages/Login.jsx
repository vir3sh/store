import React, { useState, useContext } from "react";
import { shopContext } from "../context/shopContext";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setIsloggedin } = useContext(shopContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/adminlogin",
        { email, password },
        { withCredentials: true }
      );

      console.log("API Response:", response.data); // De

      if (response.data.success) {
        // Store token in context and localStorage
        setToken(response.data.token);
        setIsloggedin(true);
        localStorage.setItem("token", response.data.token);

        // Redirect to the ListProducts page after successful login
        navigate("/"); // Redirect to the admin panel (ListProducts page)
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-black text-white rounded-md hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:neutral-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
