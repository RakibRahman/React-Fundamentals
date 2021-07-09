import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Article from "./articles/Posts";
import Profile from "./articles/Profile";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
ReactDOM.render(
  <React.StrictMode>
    <Article />
  </React.StrictMode>,
  document.getElementById("root2")
);
ReactDOM.render(<Profile />, document.getElementById("root3"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
