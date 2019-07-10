import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  position: fixed;
  width: 150px;
  top: 0;
  left: 0;
  padding: 25px 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
  z-index: -1;
`;

const MenuText = styled.span`
  position: relative;
  right: 0;
  left: 0;
  top: 15px;
  transition: 0.3s all;
  color: white;
  font-size: 4rem;
  pointer-events: none;
  user-select: none;
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
