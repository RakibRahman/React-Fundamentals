import React from "react";

function DemoComponent() {
  const calculate = (x, y) => x * y;
  const Paragraph = () => <p>Calculated Value Is: {calculate(10, 1)}</p>;

  const Paragraph2 = (props) => <p>{props.txt}</p>;

  const ErrorBlock = ({ error }) => {
    return error.failed ? (
      <p className="Error">Operation failed</p>
    ) : (
      <p>{error.message}</p>
    );
  };
  const error = {
    failed: false,
    message: "This operation completed successfully",
  };
  return (
    <div className="calculate">
      <Paragraph />
      <Paragraph2 txt="Kill me heal me!" />
      <ErrorBlock error={error} />
    </div>
  );
}

export default DemoComponent;
