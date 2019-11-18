// module imports
import React from "react";
import styled, { keyframes } from "styled-components";
import { Route, Link } from "react-router-dom";

// file imports
import Landing from "./Landing";
import Dashboard from "./Dashboard";

function App() {
  // Implemented 2 components that will mount depending on the route accessed.
  return (
    <AppContainer>
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 98vh;
  background: linear-gradient(#087475, #152b40);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
`;
