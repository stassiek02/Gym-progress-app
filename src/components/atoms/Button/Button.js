import styled, { css } from 'styled-components';

const Button = styled.button`
  font-size: 2rem;
  padding: 10px 25px;
  color: white;
  background-color: ${({ theme }) => theme.primary};
  border: 0;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.secondary};
    `}
`;

export default Button;
