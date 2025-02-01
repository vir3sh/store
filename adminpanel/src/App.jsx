import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { shopContext } from "./context/shopContext";
import ListProducts from "./pages/ListProducts";
import AddProduct from "./pages/AddProduct";
import SingleProduct from "./pages/SingleProducts";
import DeleteProduct from "./pages/DeleteProduct";
import Login from "./pages/Login";

const App = () => {
  const { isloggedin, token, setIsloggedin, setToken } =
    useContext(shopContext);
  const [loading, setLoading] = useState(true); // Prevent immediate redirect

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
      setIsloggedin(true);
    } else {
      setIsloggedin(false);
    }

    setLoading(false); // Set loading to false after checking
  }, [setToken, setIsloggedin]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <header className="bg-black text-white p-4">
        <h1 className="text-2xl font-semibold">Admin Panel</h1>
      </header>
      <main className="p-6">
        <Routes>
          {/* Public Route */}
          <Route
            path="/login"
            element={isloggedin ? <Navigate to="/" replace /> : <Login />}
          />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              isloggedin ? <ListProducts /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/add-product"
            element={
              isloggedin ? <AddProduct /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/product/:id"
            element={
              isloggedin ? <SingleProduct /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/delete-product/:id"
            element={
              isloggedin ? <DeleteProduct /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
