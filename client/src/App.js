// module imports
import React from "react";
import styled, { keyframes } from "styled-components";
import { Route, Link } from "react-router-dom";

// file imports
import Landing from "./Landing";

function App() {
  return (
    <AppContainer>
      <Route path="/" component={Landing} />
      <Link to="/dashboard">Enter Here</Link>
    </AppContainer>
  );
}

export default App;

// This is fading in the Corva logo image and text in 5 seconds
const fadein = keyframes`
    0% {
        opacity:0;
    }
  100% {
    opacity:1;
  }
`;

const AppContainer = styled.div`
  height: 98vh;
  background: linear-gradient(#087475, #152b40);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    animation: ${fadein} ease 5s;
    margin-top: 20px;
    border: 2px solid white;
    border-radius: 50px;
    text-decoration: none;
    color: white;
    padding: 20px 50px;
    font-size: 24px;
    font-weight: bold;
    font-family: "Alata", sans-serif;
    cursor: pointer;
    &:hover {
      background: white;
      color: black;
    }
  }
`;
