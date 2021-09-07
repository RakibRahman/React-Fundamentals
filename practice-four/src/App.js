import React, { Fragment, useRef } from "react";
import "./App.css";
import CustomFetch from "./components/CustomFetch";
import NotificationBar from "./components/NotificationBar/NotificationBar";
import Menu from "./components/MenuFilter/Menu";
const App = (_) => {
  const notifyStatus = {
    success: "success",
    failed: "failed",
  };
  const notifyBarRef = useRef(null);
  return (
    <Fragment>
      <Menu />
      {false && <CustomFetch />}
      <div className="wrapper">
        <button className="btn" onClick={() => notifyBarRef.current.show()}>
          Show Notification
        </button>
        <NotificationBar
          ref={notifyBarRef}
          message={`Action is ........`}
          type={notifyStatus.success}
        />
      </div>
    </Fragment>
  );
};
export default App;
