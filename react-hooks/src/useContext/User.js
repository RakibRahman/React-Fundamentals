import React, { useContext } from "react";
import { DataContext } from "./Context";
const User = () => {
  const { userName } = useContext(DataContext);
  return (
    <div>
      <h1>user: {userName}</h1>
    </div>
  );
};

export default User;
