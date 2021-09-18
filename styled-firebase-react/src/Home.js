import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
const Title = styled.h1`
  font-size: ${(props) => (props.big ? "4rem" : "2rem")};
  color: #f14e0d;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
`;
const Wrapper = styled.div`
  margin: 120px auto;
  display: grid;
  place-items: center;
  gap: 0.5em;
`;
function Home() {
  return (
    <Wrapper>
      <Title big>Welcome</Title>
      <ButtonWrapper>
        <Title> FireBase Authentication</Title>
        <Link to="/login">
          <Button>Log In</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Home;
