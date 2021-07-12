import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import Props from "./Props";
function WelcomeMessage() {
  return <h1 id="tag">Hello World!!</h1>;
}
function LoginMessage() {
  return React.createElement(
    "div",
    { className: "maindiv" },
    React.createElement("div", {}, "Child1"),
    React.createElement(
      "div",
      {},
      "Child2",
      React.createElement("h3", { className: "tag" }, "child of 2")
    )
  );
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
function FirstName() {
  return <span>Rakib</span>;
}
function LastName() {
  return <span>Rahman</span>;
}
function FullName() {
  return (
    <div>
      <FirstName /> <LastName />!
    </div>
  );
}
ReactDOM.render(
  <Fragment>
    <FullName />
    <Props />
    <WelcomeMessage />
    <GenerateNames />
    <LoginMessage />
  </Fragment>,
  document.querySelector("#root")
);
if (module.hot) {
  module.hot.accept();
}
