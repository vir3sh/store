import { createContext } from "react";
import { products } from "../assets/Product";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const currency = "$";
  const value = { products, currency };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
