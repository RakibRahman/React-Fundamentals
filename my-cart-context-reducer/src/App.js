import React, { useReducer } from "react";
import "./App.css";
import { ChakraProvider, Heading, Box } from "@chakra-ui/react";
import { ComponentA } from "./demo/ComponentA";
import { ComponentB } from "./demo/ComponentB";
import { ComponentC } from "./demo/ComponentC";
export const CountContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <ChakraProvider>
      <CountContext.Provider
        value={{ countState: state.count, countDispatcher: dispatch }}
      >
        <Box className="App">
          <Heading>Count: {state.count}</Heading>
          <ComponentA />
          <hr />
          <ComponentB />
          <hr />

          <ComponentC />
        </Box>
      </CountContext.Provider>
    </ChakraProvider>
  );
};
