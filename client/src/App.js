// module imports
import React from "react";
import styled, { keyframes } from "styled-components";
import { Route, Link } from "react-router-dom";

// file imports
import Landing from "./Landing";
import Dashboard from "./Dashboard";

function App() {
  return (
    <AppContainer>
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
    </AppContainer>
  );
}

export default App;

// This is fading in the Corva logo image and text in 5 seconds
// const fadein = keyframes`
//     0% {
//         opacity:0;
//     }
//   100% {
//     opacity:1;
//   }
// `;

const AppContainer = styled.div`
  height: 98vh;
  background: linear-gradient(#087475, #152b40);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
`;
