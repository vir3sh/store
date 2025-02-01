import { createContext, useState } from "react";

export const shopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [isloggedin, setIsloggedin] = useState(false);
  const backendUrl = "http://localhost:5000";
  const [token, setToken] = useState(null);

  const value = {
    isloggedin,
    setIsloggedin,
    backendUrl,
    token,
    setToken,
  };

  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};
