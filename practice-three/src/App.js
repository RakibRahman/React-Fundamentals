import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `counter is ${counter} | Counter App`;
  }, [counter]);
  // useEffect(() => {
  //   const savedCounterValue = localStorage.getItem("UltimateMachine");
  //   if (savedCounterValue != null) {
  //     setCounter(parseInt(savedCounterValue, 10));
  //   }
  // }, []);
  const subscribe = (count) => {
    console.log(`subscirbe for ${count}`);
  };

  const unsubscribe = (count) => {
    console.log(`unsubscirbe for ${count}`);
  };

  const onCountClick = () => setCounter(counter + 1);

  // const onSaveClick = () => localStorage.setItem("UltimateMachine", counter);
  useEffect(() => {
    subscribe(counter);
    return () => {
      unsubscribe(counter);
    };
  }, [counter]);
  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={onCountClick}>Increment value</button>
      {/* <button onClick={onSaveClick}>Save counter value</button> */}
    </div>
  );
}
export default App;
