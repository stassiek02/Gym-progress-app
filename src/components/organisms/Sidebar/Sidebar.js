import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.nav`
  position: fixed;
  width: 150px;
  top: 0;
  left: 0;
  padding: 25px 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
  z-index: -1;
  transform: translateX(-100px);
  transition: 0.2s transform;
  ${({ isVisible }) =>
    isVisible === true &&
    css`
      transform: translateX(0);
    `}
`;

const MenuText = styled.span`
  writing-mode: vertical-rl;
  text-orientation: upright;
  position: relative;
  right: 0;
  left: 0;
  top: 15px;
  transition: 0.3s all;
  transform-origin: 10px 10px;
  color: white;
  font-size: 4rem;
  pointer-events: none;
  user-select: none;

  ${({ isVisible }) =>
    isVisible === true &&
    css`
      writing-mode: horizontal;
      text-orientation: sideways;
      transform-origin: 10px 10px;
      transform: rotate(-90deg);
    `}
`;

function SideBar() {
  const [visible, setVisible] = useState(false);

  function toggleMenu() {
    setVisible(visible === false);
  }

  return (
    <>
      <Wrapper
        isVisible={visible}
        onMouseEnter={() => toggleMenu()}
        onMouseLeave={() => toggleMenu()}
      >
        <MenuText isVisible={visible}>MENU</MenuText>
        <ul>
          <li>Dupa</li>
          <li>Dupa</li>
          <li>Dupa</li>
        </ul>
      </Wrapper>
    </>
  );
}

export default SideBar;
