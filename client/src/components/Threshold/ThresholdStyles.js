import styled from "styled-components";

export const Input = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  margin-top: 10px;
  color: white;
  border-radius: 10px;
  border: 1px solid black;
  @media (max-width: 800px) {
    border-radius: 1px;
    width: 50%;
    margin-top: 0;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 60px;
  h2 {
    text-align: center;
    font-size: 20px;
    color: red;
  }
  @media (max-width: 800px) {
    width: 100%;
    margin-left: 0px;
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
  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
