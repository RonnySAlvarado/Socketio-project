import styled from "styled-components";

export const Input = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  margin-top: 10px;
  color: white;
  border-radius: 10px;
  border: 1px solid black;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 60px;
  h2 {
    color: red;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 300px;
  .submit {
    background: #4ce44c;
    &:hover {
      background: green;
      cursor: pointer;
    }
  }
  .remove {
    background: #ff6666;
    &:hover {
      background: red;
      cursor: pointer;
    }
  }
`;
