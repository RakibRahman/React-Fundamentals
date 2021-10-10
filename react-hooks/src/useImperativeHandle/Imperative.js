import React, { useRef } from "react";
import Button from "./Button.js";
const Imperative = () => {
  const btnRef = useRef(null);
  return (
    <div style={{ display: "grid", placeItems: "center", gap: "1rem" }}>
      <h1>useImperativeHandle</h1>
      <button
        onClick={() => {
          btnRef.current.alterToggle();
        }}
      >
        Parent Button
      </button>
      <Button ref={btnRef} />
    </div>
  );
};

export default Imperative;
