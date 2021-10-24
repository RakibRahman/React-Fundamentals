import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ShopPage } from "./ShopPage";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { CartContextProvider, cartReducer, initialCartState } from "./context";
export const MainPage = () => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  const cartContextValues = {
    cartState,
    cartDispatch,
  };

  return (
    <CartContextProvider value={cartContextValues}>
      <Router>
        <div className="App">
          <ShopPage />
          <Switch>
            <Route path="/" exact component={Shop} />
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </div>
      </Router>
    </CartContextProvider>
  );
};
