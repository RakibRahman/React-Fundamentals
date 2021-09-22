import React from "react";
import { useState } from "react";

function Reduce() {
  const [config, setConfig] = useState({
    filter: "all",
    expandData: true,
  });
  const clickHandler = (e) => {
    setConfig({
      ...config,
      filter: {
        author: "Rakib",
        date: "2021/9/11",
      },
    });
  };
  const clickHandler2 = (e) => {
    setConfig({
      ...config,
      filter: {
        ...config.filter,
        date: "1996/9/11",
      },
    });
    console.log(config);
  };
  return (
    <div>
      <h1>useReduce Hook</h1>
      <p>{config.filter?.author}</p>
      <p>{config.filter?.date}</p>
      <button onClick={clickHandler}>Change Author</button>
      <button onClick={clickHandler2}>Change Date</button>
    </div>
  );
}

export default Reduce;
