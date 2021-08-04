import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Multiple from "./Multiple";
import FetchData from "./FetchData";

function Main() {
  const [show, setShow] = useState(true);
  const onClickEvent = () => setShow(!show);
  return (
    <>
      {show && <App />}
      <button aria-pressed={!show} onClick={onClickEvent}>
        Show/Hide
      </button>
      <hr />
      <Multiple />
      <hr />
      <FetchData />
    </>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
