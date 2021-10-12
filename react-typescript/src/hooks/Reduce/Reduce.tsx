import React, { useReducer } from "react";
import { ShoppingListAction, ShoppingListState } from "./actions";

function shoppingListReducer(
  state: ShoppingListState,
  action: ShoppingListAction
): ShoppingListState {
  switch (action.type) {
    case "add":
      return state.concat({
        id: `${new Date().getMilliseconds.toString()}`,
        title: "",
        category: action.category,
        completed: false,
      });
    case "edit":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, title: action.title };
        }
        return item;
      });
    case "complete":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, completed: true };
        }
        return item;
      });
    case "delete":
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
}

const Reduce = () => {
  const [state, dispatch] = useReducer(shoppingListReducer, []);
  const Button = () => {
    dispatch({ type: "add", category: "Fruit" });
  };
  return null;
};

export default Reduce;
