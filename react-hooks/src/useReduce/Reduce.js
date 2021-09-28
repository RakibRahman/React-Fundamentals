import React from "react";
import { useEffect, useRef, useReducer } from "react";
const initialState = {
  count: 0,
  showText: true,
  data: {
    name: "Pain",
    eye: "Rinnegan",
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {
        count: state.count + 1,
        showText: state.showText,
        data: state.data,
      };
    case "Decrement":
      return {
        count: state.count - 1,
        showText: state.showText,
        data: state.data,
      };
    case "ToggleText":
      return { count: state.count, showText: !state.showText };
    case "ChangeData": {
      return {
        count: state.count,
        showText: state.showText,
        data: {
          name: "Minato",
          eye: "Sage mode",
        },
      };
    }
    default:
      return state;
  }
};
const init = {
  isRunning: false,
  time: 0,
};
const watcher = (watchState, action) => {
  switch (action.type) {
    case "Start":
      return { ...watchState, isRunning: true };
    case "Stop":
      return { ...watchState, isRunning: false };
    case "Reset":
      return { isRunning: false, time: 0 };
    case "Tick":
      return { ...watchState, time: watchState.time + 1 };
    default:
      throw new Error();
  }
};
function Reduce() {
  //? with usual useState
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState(true);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [watchState, dispatchWatch] = useReducer(watcher, init);
  const timeRef = useRef(0);
  useEffect(() => {
    if (!watchState.isRunning) {
      return;
    }
    timeRef.current = setInterval(() => {
      dispatchWatch({ type: "Tick" });
    }, 1000);
    return () => {
      clearInterval(timeRef.current);
      timeRef.current = 0;
    };
  }, [watchState.isRunning]);
  //! Example
  const actionHandler = () => {
    dispatch({ type: "ToggleText" });
    dispatch({ type: "Increment" });
    dispatch({ type: "ChangeData" });
  };
  return (
    <div>
      <h1>useReduce Hook</h1>
      <div>
        <p>{state.count}</p>
        <p> {state.showText && <span>Toggle Text</span>}</p>
        <p> {state.data.name}</p>

        <p> {state.data.eye}</p>

        <button onClick={actionHandler}>Click Me</button>
      </div>
      <div className="stopwatch">
        <h1>Stopwatch</h1>
        <p>{watchState.time}s</p>
        <button onClick={() => dispatchWatch({ type: "Start" })}>Start</button>
        <button onClick={() => dispatchWatch({ type: "Stop" })}>Stop</button>
        <button onClick={() => dispatchWatch({ type: "Reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default Reduce;
