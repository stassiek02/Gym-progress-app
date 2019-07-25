import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.semiBold};
  color: white;
  display: inline-block;
  text-align: center;
`;

export default Heading;
