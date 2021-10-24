import { useContext, useEffect, useState, FC } from "react";
import CartContext from "./context";
import { IItem } from "./interfaces/item";
import "./Shop.css";
export interface IShopItemProps {
  item: IItem;
}
export const Shop: FC<IShopItemProps> = (props) => {
  const { item } = props;
  const [products, setProducts] = useState<IItem[]>([]);
  const cartContext = useContext(CartContext);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <>
      <h1>Shop</h1>

      <div className="products__grid">
        {products.map((product) => (
          <div className="product__card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button
              onClick={() =>
                cartContext.cartDispatch({ type: "add_item", payload: item })
              }
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
