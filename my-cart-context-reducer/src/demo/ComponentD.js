import React from "react";
import { CountContext } from "../App";
import { Box, Button, Heading } from "@chakra-ui/react";

export const ComponentD = () => {
  const countContext = React.useContext(CountContext);
  return (
    <Box>
      <Heading> Component D</Heading>
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
