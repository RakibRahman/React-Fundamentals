import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Multiple from "./Multiple";
// import FetchData from "./FetchData";
import Form from "./Form";
import Jokes from "./Jokes";
import Record from "./Record";
function Main() {
  const [show, setShow] = useState(false);
  const onClickEvent = () => setShow(!show);
  return (
    <>
      {/* {show && <App />}
      <button aria-pressed={!show} onClick={onClickEvent}>
        Show/Hide
      </button> */}

      {/* <Multiple /> */}
      {/* <Form /> */}
      <Record />
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

ReactDOM.render(<Jokes />, document.getElementById("root2"));
