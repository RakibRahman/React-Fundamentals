import React from "react";
import "./App.css";
import { Hello } from "./Hello";
import { Message } from "./Hello";
function App() {
  return (
    <div className="App">
      <Hello message="Hello" date="today" />
      <Message text="Hello" />
    </div>
  );
}

export default App;
