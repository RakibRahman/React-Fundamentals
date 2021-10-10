import React, { useContext } from "react";
import { DataContext } from "./Context";

const Login = () => {
  const { setUserName } = useContext(DataContext);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
    </div>
  );
};

export default Login;
