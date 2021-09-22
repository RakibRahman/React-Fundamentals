import React, { useState } from "react";

const State = () => {
  const [showPass, setShowPass] = useState(false);
  const handleCheck = (e) => {
    // e.target.checked ? setShowPass(true) : setShowPass(false);
    setShowPass(!showPass);
  };
  return (
    <div>
      <h1>useState Hook</h1>

      <form onSubmit={(e) => e.preventDefault}>
        <input type="text" placeholder="you@example.com" />
        <input type={showPass ? "text" : "password"} placeholder="password" />
        <label htmlFor="check">
          <input
            type="checkbox"
            name="check"
            id="check"
            onChange={handleCheck}
          />
          Show Password
        </label>
      </form>
    </div>
  );
};

export default State;
