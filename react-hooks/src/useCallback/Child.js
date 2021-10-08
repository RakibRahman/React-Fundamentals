import React, { useEffect } from "react";

const Child = ({ returnData }) => {
  useEffect(() => {
    console.log("Function invoked");
  }, [returnData]);
  return (
    <div>
      <p>Child Component</p>
      <p>{returnData("Labib")}</p>
    </div>
  );
};

export default Child;
