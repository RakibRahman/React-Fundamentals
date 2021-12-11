import React, { useContext } from "react";
import { CountContext } from "../App";
import { Box, Button, Heading } from "@chakra-ui/react";

export const ComponentA = () => {
  const countContext = useContext(CountContext);
  return (
    <Box>
      <Heading> Component A</Heading>
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
