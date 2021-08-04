import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Multiple from "./Multiple";
// import FetchData from "./FetchData";
import Form from "./Form";
function Main() {
  const [show, setShow] = useState(false);
  const onClickEvent = () => setShow(!show);
  return (
    <>
      {show && <App />}
      <button aria-pressed={!show} onClick={onClickEvent}>
        Show/Hide
      </button>
      <hr />
      {/* <Multiple /> */}
      <Form />
      <hr />
      {/* <FetchData /> */}
    </>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
