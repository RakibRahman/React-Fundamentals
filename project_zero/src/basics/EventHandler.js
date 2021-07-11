import React, { Fragment, useState } from "react";
const EventHandler = (_) => {
  const Counter = (_) => {
    const [count, setCount] = useState(0);
    const onClickHandler = (_) => {
      setCount(count + 1);
      if (count > 10) {
        alert("Count is greater than 10");
      }
    };
    const onClickHandler2 = (_) => setCount(count - 1);

    const [meter, setMeter] = useState(0);
    const onChangeHandler = (e) => setMeter(e.target.value);

    return (
      <Fragment>
        <div>
          <h1>onClick Event</h1>
          <p>{count}</p>
          <button type="button" onClick={onClickHandler}>
            count++
          </button>
          <button type="button" onClick={onClickHandler2}>
            count--
          </button>
        </div>

        <div>
          <h1 className={meter > 70 ? "red" : "green"}>OnChange Event</h1>
          <p className={meter > 70 ? "red" : "green"}>Value is: {meter}</p>
          <input
            type="range"
            name="range"
            id="range"
            min="10"
            max="100"
            onChange={onChangeHandler}
          />
        </div>
      </Fragment>
    );
  };
  return (
    <Fragment>
      <Counter />
    </Fragment>
  );
};
export default EventHandler;
