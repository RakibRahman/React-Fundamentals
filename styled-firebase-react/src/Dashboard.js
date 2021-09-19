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
  const Div = () => (
    <div>
      <Link to="update">Update Profile</Link>
    </div>
  );
  const SIgnOut = () => <button onClick={handleLogOut}>Sign Out?</button>;
  return (
    <div>
      <h1>User Dashboard</h1>
      <h3>
        {currentUser ? (
          `welcome ${currentUser.email}`
        ) : (
          <Link to="/login">Log In now</Link>
        )}
      </h3>
      {error && <p>{error}</p>}
      {currentUser && <Div />}
      {currentUser && <SIgnOut />}

      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Dashboard;
