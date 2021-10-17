import React, { createContext, useContext, useEffect, useState } from "react";

type ContextProviderProps = {
  children: React.ReactNode;
};
// interface ValueProps {
//   products: string[];
// }
const ShopData = createContext({});

export function useShopData() {
  return useContext(ShopData);
}
export const DataProvider = ({ children }: ContextProviderProps) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  const value = {
    products,
    setProducts,
  };

  return <ShopData.Provider value={value}>{children}</ShopData.Provider>;
};
