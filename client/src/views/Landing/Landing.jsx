// module imports
import React from "react";
import { Link } from "react-router-dom";

// style imports
import { LandingContainer } from "./LandingStyles";

const Landing = () => {
  return (
    <LandingContainer>
      <img className="logo" src="/corvalogo.png" alt="Corva Logo" />
      <h2>Welcome to</h2>
      <img src="/CORVA_logo_dark.png" alt="Corva Logo2" />
      <Link to="/dashboard">Enter Here</Link>
    </LandingContainer>
  );
};

export default Landing;
