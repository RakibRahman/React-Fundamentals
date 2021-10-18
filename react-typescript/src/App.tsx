import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Hello } from "./Hello";
// import { Message } from "./Hello";
// import { MyDiv } from "./hooks/State";
// import { PracticeReducer } from "./hooks/Reduce/PracticeReducer";
import { MainPage } from "./hooks/Cart/MainPage";
function App() {
  return <MainPage />;
}

export default App;
