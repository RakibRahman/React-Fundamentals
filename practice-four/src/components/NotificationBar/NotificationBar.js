import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Notify.css";
const NotificationBar = forwardRef(({ message, type }, ref) => {
  const [showNotify, setShowNotify] = useState(false);
  useImperativeHandle(ref, () => ({
    show() {
      setShowNotify(!showNotify);
      setTimeout(() => {
        setShowNotify(false);
      }, 3000);
    },
  }));
  return (
    <div className="notify__wrapper" id={showNotify ? "show" : "hide"}>
      <div
        className="notify__box"
        style={{ backgroundColor: type === "success" ? "green" : "red" }}
      >
        <p>{type === "success" ? "✔" : "❌"}</p>
        <p className="message">{message}</p>
      </div>
    </div>
  );
});

export default NotificationBar;
