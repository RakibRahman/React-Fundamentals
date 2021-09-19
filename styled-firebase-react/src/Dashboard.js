import React, { useState } from "react";
import { useAuth } from "./context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  display: grid;
  place-items: center;
  gap: 1rem;
  margin: 10rem auto;
  border: 5px dashed seagreen;
  padding: 1rem;
`;
const Button = styled.button`
  color: #fff;
  background-color: #f14e0d;
  padding: 0.3rem;
  width: auto;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  margin: 0 auto;
`;
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
      <Link to="update">
        <Button small>Update Profile</Button>
      </Link>
    </div>
  );

  return (
    <Wrapper>
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
      {currentUser && <Button onClick={handleLogOut}>Sign Out?</Button>}

      <Link to="/">Return to Home</Link>
    </Wrapper>
  );
}

export default Dashboard;
