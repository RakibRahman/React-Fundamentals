import React, { useState } from "react";
import { useAuth } from "./context/AuthContext";
import { Link, useHistory } from "react-router-dom";
function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logOut } = useAuth();
  const history = useHistory();
  const handleLogOut = async () => {
    setError("");

    try {
      await logOut();
      history.push("/login");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div>
      <h1> welcome {currentUser && currentUser.email}</h1>
      {error && <p>{error}</p>}
      <button onClick={handleLogOut}>Sign Out?</button>
    </div>
  );
}

export default Dashboard;
