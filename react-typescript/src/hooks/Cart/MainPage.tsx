import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IItem } from "./interfaces/item";
import { ShopPage } from "./ShopPage";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { CartContextProvider } from "./context";
export const MainPage = () => {
  const [items, setItems] = useState<{ [key: string]: IItem[] }>({});
  const [count, setCount] = useState<number>(0);
  const updateItems = (_items: { [key: string]: IItem[] }) => {
    setItems(_items);
  };
  const cartContextValues = {
    items,
    updateItems,
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
