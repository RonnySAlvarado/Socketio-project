import styled from "styled-components";

export const AppContainer = styled.div`
  height: 98vh;
  background: linear-gradient(#087475, #152b40);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
  @media (max-width: 500px){
      justify-content: flex-start;
  }
`;
