// module imports
import React, { useState } from "react";
// import styled from "styled-components";

// style imports
import {
  Input,
  Button,
  InputContainer,
  ButtonContainer
} from "./ThresholdStyles";

const Threshold = ({ setThreshold }) => {
  // setThreshold is going to set the parent threshold variable in Dashboard.jsx
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    // Prevents the page from refreshing
    e.preventDefault();
    if (Number(input) > 100 || Number(input) < -100 || isNaN(input)) {
      setError(true);
      setInput("");
    } else {
      setThreshold(Number(input));
      setError(false);
      setInput("");
    }
  };

  // This will remove the threshold -> still a work in progress
  const removeThreshold = e => {
    e.preventDefault();
    setThreshold(null);
  };

  return (
    <>
      <InputContainer>
        <Input
          placeholder="Enter a threshold between -100 and 100"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        {Number(input) < -100 || Number(input) > 100 ? (
          <h2>Must enter value between -100 and 100</h2>
        ) : null}
        {isNaN(input) && input !== "-" ? (
          <h2>Must contain only numbers. No characters.</h2>
        ) : null}
        {error ? (
          <h2>
            Cannot submit. Input contains either values outside of allowed range
            OR unknown characters.
          </h2>
        ) : null}
        <ButtonContainer>
          <Button className="submit" onClick={e => handleSubmit(e)}>
            Submit Threshold
          </Button>
          <Button className="remove" onClick={e => removeThreshold(e)}>
            Remove Threshold
          </Button>
        </ButtonContainer>
      </InputContainer>
    </>
  );
};

export default Threshold;

// const Input = styled.input`
//   width: 300px;
//   height: 50px;
//   border: 1px solid black;
//   border-radius: 10px;
// `;

// const Button = styled.button`
//   width: 100px;
//   height: 50px;
//   margin-top: 10px;
//   color: white;
//   border-radius: 10px;
//   border: 1px solid black;
// `;

// const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-left: 60px;
//   h2 {
//     color: red;
//   }
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   width: 300px;
//   .submit {
//     background: #4ce44c;
//     &:hover {
//       background: green;
//       cursor: pointer;
//     }
//   }
//   .remove {
//     background: #ff6666;
//     &:hover {
//       background: red;
//       cursor: pointer;
//     }
//   }
// `;
