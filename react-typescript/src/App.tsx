import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Hello } from "./Hello";
import { Message } from "./Hello";
import { MyDiv } from "./hooks/State";
import { PracticeReducer } from "./hooks/Reduce/PracticeReducer";
import { Shop } from "./hooks/Cart/Shop";
import { Cart } from "./hooks/Cart/Cart";
function App() {
  const ShopPage = () => (
    <div className="shop-page">
      <Link to="/">Shop</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
  return (
    <Router>
      <div className="App">
        <ShopPage />
        {/* <Hello message="Hello" date="today" /> */}
        {/* <Message text="Hello" /> */}
        {/* <MyDiv /> */}
        {/* <PracticeReducer /> */}
        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
