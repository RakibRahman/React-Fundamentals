import React, { useContext } from "react";
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
    <>
      <div className="cart">
        <h3>
          <img src={item.image} alt="item demo" />
          {item.title} x {quantity}
        </h3>

        <p>${item.price * quantity}</p>

        <button
          onClick={() =>
            cartContext.cartDispatch({ type: "remove_item", payload: item })
          }
        >
          remove item
        </button>
      </div>
    </>
  );
};
