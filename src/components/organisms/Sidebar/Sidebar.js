import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import {Link} from 'react-router-dom';
import { signOut } from 'actions';
import { connect } from 'react-redux';
import {routes} from 'routes';

const StyledLink = styled(Link)`
  color:white;
  text-decoration:none;
  font-weight:${({theme})=>theme.bold};
`
const Wrapper = styled.nav`
  position: fixed;
  width: 150px;
  top: 0;
  left: 0;
  padding: 25px 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};

 @media(max-width: 768px) {
    width:0px;
    display:none;
    
  }
`;

const MenuText = styled.span`
  position: relative;
  left: 5px;
  top: 15px;
  transition: 0.3s all;
  color: white;
  font-size: 3rem;
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
  font-size:${({ theme }) => theme.fontSize.l};

  &:hover{
    background-color:${({ theme }) => theme.tertiary};
  }
`;

function SideBar({ signOut }) {
  return (
    <>
      <Wrapper>
        <MenuText>GymApp</MenuText>
        <StyledList>
          <StyledListItem><StyledLink to={routes.workout}>Workout</StyledLink></StyledListItem>
           <StyledListItem><StyledLink to={routes.sessions}>Sessions</StyledLink></StyledListItem>
        </StyledList>
        <Button onClick={() => signOut()}>Log out</Button>
      </Wrapper>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});
export default connect(
  null,
  mapDispatchToProps,
)(SideBar);
