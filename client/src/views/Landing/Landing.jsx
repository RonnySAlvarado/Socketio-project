// module imports
import React from "react";
import { Link } from "react-router-dom";
// import styled, { keyframes } from "styled-components";

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

// This is fading in the Corva logo image and text in 5 seconds
// const fadein = keyframes`
//     0% {
//         opacity:0;
//     }
//   100% {
//     opacity:1;
//   }
// `;

// const LandingContainer = styled.div`
//   animation: ${fadein} ease 5s;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   h2 {
//     margin: 30px 0 0 0;
//     font-size: 50px;
//     font-family: "Alata", sans-serif;
//   }
//   .logo {
//     width: 20%;
//   }
//   img {
//     width: 50%;
//     color: white;
//   }
//   a {
//     margin-top: 20px;
//     border: 2px solid white;
//     border-radius: 50px;
//     text-decoration: none;
//     color: white;
//     padding: 20px 50px;
//     font-size: 24px;
//     font-weight: bold;
//     font-family: "Alata", sans-serif;
//     cursor: pointer;
//     &:hover {
//       background: white;
//       color: black;
//     }
// `;
