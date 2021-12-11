import React from "react";
import { ComponentF } from "./ComponentF";
import { CountContext } from "../App";
import { Box, Button, Heading } from "@chakra-ui/react";
export const ComponentE = () => {
  const countContext = React.useContext(CountContext);
  return (
    <Box>
      <Heading>Component F in Component E</Heading>
      <ComponentF />
      <Button onClick={() => countContext.countDispatcher({ type: "reset" })}>
        Reset
      </Button>
    </Box>
  );
};
