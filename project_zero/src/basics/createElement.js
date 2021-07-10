import React from "react";
function CreateElement() {
  const button = React.createElement(
    "button",
    { className: "btn" },
    "Click Me"
  );

  const span = React.createElement("span", null, " SPAN");
  const p = React.createElement(
    "p",
    { className: "para" },
    " lorem ipsum dolor sit am",
    span
  );
  const main = React.createElement("main", { id: "main" }, p);

  return (
    <div>
      {main}
      {button}
    </div>
  );
}
export default CreateElement;
