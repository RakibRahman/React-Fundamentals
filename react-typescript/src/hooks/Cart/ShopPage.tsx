import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const ShopPage = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="shop-page">
      <Link to="/">Shop</Link>
      <Link to="/cart">Cart{}</Link>
    </div>
  );
};
