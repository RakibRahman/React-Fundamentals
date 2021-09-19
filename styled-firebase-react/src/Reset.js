import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "./context/AuthContext";
import { Link, useHistory } from "react-router-dom";
const Form = styled.form`
  height: 420px;
  width: 400px;
  background: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
`;
const Title = styled.h1`
  font-size: 2rem;
  color: #f14e0d;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
`;
const Input = styled.input`
  padding: 0.5rem 0.2rem;
  width: 90%;
  margin: 15px 0;
  background-color: #fff;
  border: 3px solid #f14e0d;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
`;
const Button = styled.button`
  color: #fff;
  background-color: ${(props) => (props.red ? "crimson" : "#f14e0d")};
  padding: 0.2rem;
  width: 80px;
  font-size: ${(props) => (props.small ? "1rem" : "1.2rem")};
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  margin: 0 auto;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
`;
function Reset() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [popup, setPopup] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setPopup("");
      setLoading(true);
      setError("");
      await resetPassword(email);
      setPopup("Password reset email sent -redirecting to Log In Page");
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    } catch {
      setError("Reset operation Failed");
    }
    setLoading(false);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Title>Reset Password</Title>

      {error && <p>{error}</p>}
      {popup && <p>{popup}</p>}
      <Input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <ButtonWrapper>
        <Button type="submit" small disabled={loading}>
          Reset Password
        </Button>
        <Link to="/login">
          <Button>Login</Button>
        </Link>

        <Link to="/">Return to Home</Link>
      </ButtonWrapper>
    </Form>
  );
}

export default Reset;
