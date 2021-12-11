import React from "react";
import { CountContext } from "../App";
import { Box, Button, Heading } from "@chakra-ui/react";

export const ComponentF = () => {
  const countContext = React.useContext(CountContext);
  return (
    <Box>
      <Heading>Component F</Heading>
      <Button
        onClick={() => countContext.countDispatcher({ type: "increment" })}
      >
        Increment
      </Button>
      <Button
        onClick={() => countContext.countDispatcher({ type: "decrement" })}
      >
        Decrement
      </Button>
    </Box>
  );
};
