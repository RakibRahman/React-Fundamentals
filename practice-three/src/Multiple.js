import React, { useState, useEffect } from "react";
const Multiple = (_) => {
  const [count, setCount] = useState({
    countA: 0,
    countB: 0,
  });
  const [toggle, setToggle] = useState(true);
  const pointAClick = (_) =>
    setCount((counts) => ({
      ...counts,
      countA: counts.countA + 1,
    }));
  const pointBClick = (_) =>
    setCount((counts) => ({
      ...counts,
      countB: counts.countB + 1,
    }));

  useEffect(() => {
    if (toggle) {
      document.body.style.backgroundColor = "green";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  }, [toggle]);
  const toggleSwitch = () => {
    console.log("ok");
    setToggle(!toggle);
  };
  const LightOn = () => <p>Light Is On</p>;
  const LightOff = () => <p>Light Is Off</p>;
  return (
    <div>
      <h1>Multiple Counter</h1>
      <p>Point A:{count.countA} </p>
      <p>Point B:{count.countB} </p>
      <button onClick={pointAClick}>increase A</button>
      <button onClick={pointBClick}>increase B</button>

      {toggle ? <LightOn /> : <LightOff />}
      <button onClick={toggleSwitch}>Toggle</button>
    </div>
  );
};
export default Multiple;
