import React, { FC, useContext } from "react";
import { IItem } from "./interfaces/item";
import CartContext from "./context";

export interface ICartPageProps {
  item: IItem;
  quantity: number;
}
export const CartItem: React.FC<ICartPageProps> = (props) => {
  const cartContext = useContext(CartContext);

  const { item, quantity } = props;

  return (
    <div>
      <h3>
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
  );
};
