import { useShopData } from "./context";
export const Shop = () => {
  const { products, setProducts } = useShopData();
  return <h1>Shop</h1>;
};
