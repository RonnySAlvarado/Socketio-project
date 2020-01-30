import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  @media (max-width: 800px) {
    height: 100%;
    justify-content: space-evenly;
  }
  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;

export const LoaderContainer = styled.div`
  @media (max-width: 800px) {
    margin-top: 25%;
  }
`;
