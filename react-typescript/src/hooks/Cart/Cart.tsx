import { useContext, FC } from "react";
import CartContext from "./context";

import { CartItem, ICartPageProps } from "./CartItem";
export const Cart: FC<ICartPageProps> = (props) => {
  const cartContext = useContext(CartContext);

  return (
    <>
      <h1>Cart</h1>

      <div className="cart__container">
        {Object.keys(cartContext.items).length > 0 ? (
          <div>
            {Object.keys(cartContext.items).map((value, index) => {
              let _items = cartContext.items[value];

              if (_items.length > 0) {
                return (
                  <CartItem
                    key={index.toString()}
                    item={_items[0]}
                    quantity={_items.length}
                  />
                );
              }
            })}
          </div>
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
    </>
  );
};
