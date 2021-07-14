import React, { useState } from "react";
import "./Demo.css";
const Demo = (_) => {
  const Title = () => <h1>useState</h1>;

  //!Show or Hide Elements
  const ShowHide = () => {
    const [showText, setShowText] = useState(false);

    return (
      <div>
        <button onClick={() => setShowText(!showText)}>Toggle Text</button>
        {showText && <div className="show">This text will show!</div>}
      </div>
    );
  };

  //! Conditional Rendering
  const SignInMessage = () => (
    <div>
      <h3>Please Sign In</h3>
      <input type="text" name="" placeholder="Enter Name" id="name" />
      <input type="text" name="" placeholder="Enter password" id="pass" />
    </div>
  );
  const AdminPanel = () => (
    <div>
      <h2>Welcome to Admin Panel</h2>
      <button>Settings</button>
      <button>Edit Profile</button>
      <button>User Control</button>
      <p>people visit today:256</p>
    </div>
  );
  const RenderAdminPanel = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <div className="admin">
        {isLoggedIn ? <AdminPanel /> : <SignInMessage />}
      </div>
    );
  };

  //! Holding list of data
  const ToDoList = () => {
    const [todos, setTodos] = useState([
      {
        id: 1,
        description: "first item",
        isDone: false,
      },
      {
        id: 2,
        description: "second item",
        isDone: false,
      },
      {
        id: 3,
        description: "third item",
        isDone: false,
      },
    ]);

    return (
      <>
        {todos.map((todo) => (
          <div key={todo.id}>
            <p> Description: {todo.description}</p>
            <p>Status: {todo.isDone.toString()}</p>
          </div>
        ))}
      </>
    );
  };
  //! Holding form values
  const ShowFormInfo = () => {
    const [userName, setUser] = useState("");
    const [userPass, setPass] = useState("");
    const HandleFormSubmit = () => {
      !userName || !userPass
        ? alert("Enter User Name and Password")
        : alert(`user name is: ${userName} and password is: ${userPass}`);
    };
    return (
      <>
        <form onSubmit={HandleFormSubmit}>
          <label htmlFor="userName">
            userName:{" "}
            <input
              type="text"
              id="userName"
              onChange={(e) => setUser(e.target.value)}
            />
          </label>
          <label htmlFor="userPass">
            userPass:{" "}
            <input
              type="text"
              id="userPass"
              onChange={(e) => setPass(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  };
  return (
    <>
      <Title />
      <ShowFormInfo />
      <ShowHide />
      <RenderAdminPanel />
      <ToDoList />
    </>
  );
};
export default Demo;
