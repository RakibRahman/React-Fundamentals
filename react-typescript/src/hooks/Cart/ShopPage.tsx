import { Link } from "react-router-dom";
import { FC, useState, useEffect, useContext } from "react";
import CartContext from "./context";

export const ShopPage: FC = (props) => {
  const [count, setCount] = useState<number>(0);
  const cartContext = useContext(CartContext);
  useEffect(() => {
    let _count = 0;
    const _items = { ...cartContext.cartState.items };
    for (let key in _items) {
      _count += _items[key].length;
    }
    if (_count === count) return;

    setCount(_count);
  }, [cartContext, count]);
  return (
    <div className="shop-page">
      <Link to="/">Shop</Link>
      <Link to="/cart">Cart-{count}</Link>
    </div>
  );
};
