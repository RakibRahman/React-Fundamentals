import React, { useState } from "react";

export const EventHandler = () => {
  const [quote, setQuote] = useState<string>("This World Shall Know Pain");
  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setQuote("Shinra Tensei");
  };
  const clickHandler2: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setQuote("Almighty Push");
  };
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const target = event.target as HTMLAnchorElement | HTMLButtonElement;
  };
  return (
    <div>
      <h1>EventHandler</h1>
      <p>{quote}</p>
      <button onClick={clickHandler}>...</button>
      <button onClick={clickHandler2}>...</button>
      <hr />
    </div>
  );
};
