import React from "react";
import ReactDOM from "react-dom";
import "./basics.css";

import CreateElement from "./createElement";

const Basics = (_) => {
  const hello = <p> {((_) => "Hello World!")()} </p>;

  const input = (
    <React.Fragment>
      <label htmlFor="inputName">Name:</label>
      <input type="text" id="inputName" aria-label="this is a test input" />
      <label htmlFor="inputPass">password:</label>
      <input type="text" id="inputPass" readOnly />
    </React.Fragment>
  );

  const someText = " lorem ipsum dolor sit amet lorem ipsum lorem et";
  let count = 0;
  const interval = setInterval(() => {
    const counter = <p>{count}</p>;

    if (count === 500) {
      clearInterval(interval);
    } else {
      count++;
    }
    // ReactDOM.render(counter, document.getElementById("root3"));
  }, 300);
  const paragraph = <p className="paragraph">{someText}</p>;

  const isError = false;

  const errorMessage = (
    <p className={isError ? "Error" : "allOk"}>
      {isError ? "Something went wrong" : "All ok"}
    </p>
  );
  function WelcomeMessage() {
    return <p>{someText}</p>;
  }
  return (
    <React.Fragment>
      <h1>Hello</h1>
      {CreateElement()}
      {input}
      <hr />
      {paragraph}
      {hello}
      {errorMessage}
      <WelcomeMessage />
    </React.Fragment>
  );
};
export default Basics;
