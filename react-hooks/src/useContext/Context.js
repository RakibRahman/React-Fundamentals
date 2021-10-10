import React, { useState, createContext } from "react";
import User from "./User";
import Login from "./Login";

export const DataContext = createContext(null);

const Context = () => {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h1>Context API</h1>
      <div style={{ display: "grid", placeItems: "center", gap: "0.1rem" }}>
        <DataContext.Provider value={{ userName, setUserName }}>
          <Login />
          <User />
        </DataContext.Provider>
      </div>
    </div>
  );
};

export default Context;
