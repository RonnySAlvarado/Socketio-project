// module imports
import React from "react";
import { Route } from "react-router-dom";

// file imports
import Landing from "./views/Landing/Landing";
import Dashboard from "./views/Dashboard/Dashboard";
import { AppContainer } from "./AppContainerStyle";

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
