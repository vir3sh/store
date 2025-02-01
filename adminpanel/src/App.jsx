import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import { useContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import { shopContext } from "./context/shopContext";

const App = () => {
  const { isloggedin, setIsloggedin, setToken } = useContext(shopContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage for a token
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsloggedin(true); // Mark user as logged in
    } else {
      navigate("/login"); // Navigate to login if no token
    }
  }, [setIsloggedin, setToken, navigate]);

  return (
    <div className="min-h-screen">
      {!isloggedin ? (
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <>
          <Navbar />
          <div className="flex w-full flex-col sm:flex-row">
            <Sidebar />
            <div className="w-[70%] ml-[max(5vw,25px)] my-8">
              <Routes>
                <Route element={<Add />} path="/add" />
                <Route element={<List />} path="/list" />
                <Route element={<Order />} path="/order" />
                <Route path="*" element={<Navigate to="/add" />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
