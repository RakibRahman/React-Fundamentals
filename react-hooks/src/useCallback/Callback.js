import React, { useCallback, useState } from "react";
import Child from "./Child.js";
const Callback = () => {
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState("Hooks for optimization");

  const returnData = useCallback(
    (text) => {
      return data + " " + text;
    },
    [data]
  );
  return (
    <div>
      <h1>useCallBack</h1>
      <Child returnData={returnData} />
      {refresh && <p>Toggle Text</p>}
      <button onClick={() => setRefresh(!refresh)}>Refresh</button>
    </div>
  );
};

export default Callback;
