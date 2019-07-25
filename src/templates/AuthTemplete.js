import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAuthCard = styled.div`
  width: 400px;
  height: auto;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthTemplete = ({ children }) => (
  <StyledWrapper>
    <StyledAuthCard>{children}</StyledAuthCard>
  </StyledWrapper>
);

export default AuthTemplete;
