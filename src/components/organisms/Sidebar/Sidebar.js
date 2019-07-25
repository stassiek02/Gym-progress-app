import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { signOutUser } from 'actions';
import { connect } from 'react-redux';

const Wrapper = styled.nav`
  position: fixed;
  width: 150px;
  top: 0;
  left: 0;
  padding: 25px 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
`;

const MenuText = styled.span`
  position: relative;
  left: 5px;
  top: 15px;
  transition: 0.3s all;
  color: white;
  font-size: 4rem;
`;
const StyledList = styled.ul`
  margin-top: 60px;
  list-style: none;
  padding: 0;
  z-index: 99999;
`;
const StyledListItem = styled.li`
  padding:15px 0;
  border-bottom:1px solid white;
  text-align:center;
  transition:.2s background-color;
  color:white;
  font-size:${({ theme }) => theme.fontSize.l}

  &:hover{
    background-color:${({ theme }) => theme.tertiary};
  }
`;

function SideBar({ signOutUser }) {
  return (
    <>
      <Wrapper>
        <MenuText>MENU</MenuText>
        <StyledList>
          <StyledListItem>Routine</StyledListItem>
          <StyledListItem>Progress</StyledListItem>
        </StyledList>
        <Button onClick={() => signOutUser()}>Log out</Button>
      </Wrapper>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(signOutUser()),
});
export default connect(
  null,
  mapDispatchToProps,
)(SideBar);
