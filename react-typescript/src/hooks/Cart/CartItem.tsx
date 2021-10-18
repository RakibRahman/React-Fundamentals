import React, { useContext, useEffect, useState } from "react";
import { IItem } from "./interfaces/item";
import CartContext from "./context";

export interface ICartPageProps {
  item: IItem;
  quantity: number;
}
export const CartItem: React.FC<ICartPageProps> = (props) => {
  const cartContext = useContext(CartContext);

  const { item, quantity } = props;
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {}, [cartContext]);
  return (
    <>
      <div className="cart">
        <h3>
          <img src={item.image} alt="item demo" />
          {item.title} x {quantity}
        </h3>

        <p>${item.price * quantity}</p>

        <button
          onClick={() => {
            let _items = { ...cartContext.items };

            _items[item.title].pop();

            if (_items[item.title].length === 0) {
              delete _items[item.title];
            }
            cartContext.updateItems(_items);
          }}
        >
          remove item
        </button>
      </div>
    </>
  );
};
