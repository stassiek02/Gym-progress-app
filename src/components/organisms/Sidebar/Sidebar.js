import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { NavLink } from 'react-router-dom';
import graphIcon from 'assets/icons/graph.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const StyledLogoLink = styled(NavLink)`
  width: 67px;
  height: 67px;
  display: block;

  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
`;
const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SideBar = () => (
  <Wrapper>
    <StyledLogoLink to="/">
      <span>GymTrack</span>
    </StyledLogoLink>
    <StyledList>
      <li>
        <ButtonIcon to="/" as={NavLink} icon={penIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} icon={graphIcon} activeclass="active" />
      </li>
    </StyledList>
    <ButtonIcon as={NavLink} icon={logoutIcon} />
  </Wrapper>
);

export default SideBar;
