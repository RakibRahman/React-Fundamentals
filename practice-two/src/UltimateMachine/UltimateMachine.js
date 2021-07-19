import "./UltimateMachine.css";
import React, { useState } from "react";
const UltimateMachine = (_) => {
  const [isOn, setIsOn] = useState(false);

  const OnMessage = (_) => (
    <p className="active"> Ultimate Machine is Activated</p>
  );
  const OffMessage = (_) => (
    <p className="deactivate">Ultimate Machine is Deactivated</p>
  );

  const Message = ({ toggle }) => {
    if (isOn) {
      return <OnMessage />;
    } else {
      return <OffMessage />;
    }
  };
  let message;
  isOn ? (message = <OnMessage />) : (message = <OffMessage />);
  const onClickHandler = (_) => {
    setIsOn((toggle) => !toggle);
  };
  return (
    <div className="UltimateMachine">
      <h1>The Ultimate Machine</h1>
      <Message toggle={isOn} />
      {message}
      {isOn ? <OnMessage /> : <OffMessage />}
      <button type="button" onClick={onClickHandler} aria-pressed={isOn}>
        Toggle Status
      </button>
    </div>
  );
};
export default UltimateMachine;
