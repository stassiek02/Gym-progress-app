import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import logout from 'assets/icons/logout.svg';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import { Link } from 'react-router-dom';
import { signOut } from 'actions';
import { connect } from 'react-redux';
import { routes } from 'routes';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.bold};
  &:hover {
    color: #f1f1f1f1;
  }
`;
const Wrapper = styled.nav`
  border-radius: 2px;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.primary};
  z-index: 99;
`;

const MenuText = styled.span`
  font-size:25px;
  margin-left:40px;
  color:white;
  @media(max-width:560px){
    margin:0 auto;
    z-index:999;
  }
 }
`;
const StyledList = styled.ul`
  margin:0;
  height:100%;

   @media(max-width:560px){
    position:absolute;
    height: 800px;
    width:100%;
    display:flex;
    flex-direction:column;
    top:0;
    background:${({ theme }) => theme.primary};
    justify-content:center;
    z-index:98;
    transition:.2s transform;
    overflow:hidden;
    transform:translateX(-100%);
    padding:0;

  ${({ isActive }) =>
      isActive && css`
        transform: translate(0);
      `}

   }

    `; 

const LogoutButton = styled(Button)`
  height:100%;
  width:150px;
  background-image:url(${logout});
  background-repeat:no-repeat;
  background-size:20%;
  background-position:5%;

  @media(max-width:560px){
     height:50px;
   } 
 }
`;

const StyledListItem = styled.li`
  height: 100%;
  padding-left: 20px;
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.l};

  @media (max-width: 560px) {
    text-align: center;
    height: 50px;
    padding: 10px;
  }
`;

function SideBar({ signOut }) {
  const [active, setActive] = useState(false);

  const ToggleMenu = ()=>{
    setActive(!active)
  }

  return (
    <>
      <Wrapper>
        <Hamburger isActive={active} onClick={() => ToggleMenu()}></Hamburger>
        <MenuText>GymApp</MenuText>
        <StyledList isActive={active}>
          <StyledListItem>
            <StyledLink to={routes.workout} onClick={() => ToggleMenu()}>
              Workout
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to={routes.sessions} onClick={() => ToggleMenu()}>
              Sessions
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <LogoutButton onClick={() => signOut()}>Log out</LogoutButton>
          </StyledListItem>
        </StyledList>
      </Wrapper>
    </>
  );
}
SideBar.propTypes={
    signOut:PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});
export default connect(
  null,
  mapDispatchToProps,
)(SideBar);
