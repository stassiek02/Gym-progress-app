import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 60px;
  height: 60px;

  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50%;
  border: none;
  background-color: ${({ theme }) => theme.primary};
`;
export default ButtonIcon;
