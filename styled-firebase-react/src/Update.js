import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
const Form = styled.form`
  height: 480px;
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
  margin-bottom: 10px;
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
  &::placeholder {
    font-size: 16px;
  }
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
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-direction: column;
`;
const Label = styled.label`
  color: mediumaquamarine;
  font-size: 18px;
`;
function Update() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, updateEmail, updatePassword } = useAuth();
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    if (passwordConfirm !== password) {
      return setError("Password does not match");
    }
    setLoading(true);
    setError("");
    const promises = [];
    if (email !== currentUser.email) {
      promises.push(updateEmail(email));
    }
    if (password !== currentUser.password) {
      promises.push(updatePassword(password));
    }
    Promise.all(promises)
      .then(() => {
        history.push("/dashboard");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        console.log("details updated successfully");

        setLoading(false);
      });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Title>Update Profile</Title>

      {error && <p>{error}</p>}
      <Label>
        Email:
        <Input
          type="text"
          placeholder="Enter user/email"
          defaultValue={currentUser.email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Label>
      <Label>
        Password:
        <Input
          type="text"
          placeholder="leave blank to keep same password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Label>
      <Label>
        Repeat Password:
        <Input
          type="text"
          placeholder="leave blank to keep same password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </Label>

      <ButtonWrapper>
        <Button type="submit" disabled={loading}>
          Update
        </Button>

        <Link to="/dashboard">back to Dashboard</Link>
      </ButtonWrapper>
    </Form>
  );
}

export default Update;
