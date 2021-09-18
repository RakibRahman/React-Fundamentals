import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
const Form = styled.form`
  height: 520px;
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
  background-color: #f14e0d;
  padding: 0.2rem;
  width: 80px;
  font-size: ${(props) => (props.small ? "1rem" : "1.2rem")};
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  margin: 0 auto;
  disabled {
    opacity: 0.2;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-direction: column;
`;
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();
  const history = useHistory();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (passwordConfirm !== password) {
      return setError("Password does not match");
    }
    try {
      setLoading(true);
      setError("");
      await signUp(email, password);
      history.push("/dashboard");
    } catch {
      setError("Account Creation failed");
    }
    setLoading(false);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Title>Sign Up</Title>
      {/* <p style={{ backgroundColor: "red" }}>
        {currentUser && currentUser.email}
      </p> */}
      {error && <p>{error}</p>}
      <Input
        type="text"
        placeholder="Enter user/email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Repeat Password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <ButtonWrapper>
        <Button type="submit" disabled={loading}>
          Sign Up
        </Button>
        <Link to="/login">Already have account?</Link>
        <Link to="/">Return to Home</Link>
      </ButtonWrapper>
    </Form>
  );
}

export default SignUp;
