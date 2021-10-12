import React from "react";
import "./App.css";
import { Hello } from "./Hello";
import { Message } from "./Hello";
import { MyDiv } from "./hooks/State";
import { PracticeReducer } from "./hooks/Reduce/PracticeReducer";
function App() {
  return (
    <div className="App">
      <Hello message="Hello" date="today" />
      <Message text="Hello" />
      {/* <MyDiv /> */}
      <PracticeReducer />
    </div>
  );
}

export default App;
