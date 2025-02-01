import { createContext, useState } from "react";

export const shopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const backendUrl = "http://localhost:5000"; // Update with your actual backend URL
  const [isloggedin, setIsloggedin] = useState(false);
  const [token, setToken] = useState(null); // State to store the token

  const value = {
    backendUrl,
    isloggedin,
    setIsloggedin,
    token, // Add token to the context
    setToken, // Add setToken function to the context
  };

  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};
