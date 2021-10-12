import { useReducer } from "react";

interface State {
  count: number;
  limit: boolean;
}
interface IncrementAction {
  type: "Increment";
}
interface DecrementAction {
  type: "Decrement";
}

type ActionType = IncrementAction | DecrementAction;
const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "Decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, limit: false });
  return (
    <div>
      <h1>{state.count}</h1>
      <h1>{state.count > 10 ? " Game Beche Thakle" : "labib"}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>Plus</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Minus</button>
    </div>
  );
};
