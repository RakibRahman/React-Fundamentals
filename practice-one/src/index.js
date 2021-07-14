import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Envelope from "./Envelope/Envelope.js";
import Card from "./Card/Card.js";
import ChildProp from "./ChildrenProp/ChildrenProp.js";

const url =
  "https://cheapandcheerfulcooking.com/wp-content/uploads/2021/01/chinese-fried-noodles-basic-recipe-2.jpg";
const root = document.querySelector("#root");
const Background = (_) => {
  const generateColor = () =>
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0");
  const Div = () => {
    return <div className="bg"></div>;
  };

  const getColor = () => {
    console.log(generateColor());
    const bg = document.querySelector(".bg");
    bg.style.background = `${generateColor()}`;
  };
  return (
    <Fragment>
      <Div />
      <button onClick={getColor}>Generate Color</button>
    </Fragment>
  );
};
const ErrorBox = ({ children, re }) => {
  return (
    <button>
      <span>🔴</span>
      {children}
      {re}
    </button>
  );
};
ReactDOM.render(
  <Fragment>
    <ChildProp />
    <Background />
    <ErrorBox children="The world is" re=" ending" />
    <App />
    <Envelope />
    <Card
      image={url}
      title="Hakka Noodles"
      text="Hakka Noodles is the best noodles"
    />
  </Fragment>,
  root
);
