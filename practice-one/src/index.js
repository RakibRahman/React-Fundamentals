import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import Props from "./Props";
function WelcomeMessage() {
  return <h1 id="tag">Hello World!!</h1>;
}

const GenerateNames = (_) => {
  const names = ["Rakib", "Sakib", "Pain", "Naurto"];
  const colors = ["red", "green", "blue", "purple", "yellow"];

  const [name, setName] = useState(names[0]);

  const randomValues = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };

  const onClickHandler = (_) => {
    setName(() => randomValues(names));

    const title = document.querySelector("#tag");
    const btn = document.querySelector(".btn");
    title.style.color = `${randomValues(colors)}`;
    btn.style.backgroundColor = `${randomValues(colors)}`;
  };

  const Button = (_) => (
    <button className="btn" onClick={onClickHandler}>
      Click me
    </button>
  );

  return (
    <div>
      <p>{name}</p>
      <Button />
    </div>
  );
};

ReactDOM.render(
  <Fragment>
    <Props />
    <WelcomeMessage />
    <GenerateNames />
  </Fragment>,
  document.querySelector("#root")
);
