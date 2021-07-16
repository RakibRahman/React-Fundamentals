import React, { Fragment, useState } from "react";
import "./Counter.css";
const Counter = (_) => {
  const [count, setCount] = useState(0);
  let num = 0;

  const incrementHandler = (_) => {
    setCount((c) => c + 1);
  };
  const derementHandler = (_) => {
    setCount((c) => c - 1);
  };
  const resetHandler = (_) => {
    setCount((c) => (c = 0));
  };
  const CounterView = (_) => (
    <div className="counter">
      <p className={count > 10 || count < 0 ? "red" : "blue"}>{count}</p>
      <div className="buttons">
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={derementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
  return <CounterView />;
};
export default Counter;
