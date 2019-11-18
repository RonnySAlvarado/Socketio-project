import React from "react";
import styled, { keyframes } from "styled-components";

const Landing = () => {
  return (
    <LandingContainer>
      <img className="logo" src="/corvalogo.png" alt="Corva Logo" />
      <h2>Welcome to</h2>
      <img src="/CORVA_logo_dark.png" alt="Corva Logo2" />
    </LandingContainer>
  );
};

export default Landing;

// This is fading in the Corva logo image and text in 5 seconds
const fadein = keyframes`
    0% {
        opacity:0;
    }
  100% {
    opacity:1;
  }
`;

const LandingContainer = styled.div`
  animation: ${fadein} ease 5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 30px 0 0 0;
    font-size: 50px;
    font-family: "Alata", sans-serif;
  }
  .logo {
    width: 20%;
  }
  img {
    width: 50%;
    color: white;
  }
`;
