import styled, { css } from 'styled-components';

const Button = styled.button`
  display: block;
  font-family: 'Montserrat';
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.normal};
  width: 220px;
  padding: 10px 25px;
  color: white;
  background-color: ${({ theme }) => theme.secondary};
  border: 0;
  margin: 0 auto;
  transition: 0.2s background-color;
  &:hover {
    background-color: rgb(217, 78, 91, 0.8);
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.secondary};
    `}
`;

export default Button;
