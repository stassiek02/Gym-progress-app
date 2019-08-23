import React from 'react';
import styled,{css} from 'styled-components';
import PropTypes from 'prop-types';


const HamburgerButton = styled.button`
position:absolute;
top:0;
left:0;
width:50px;
height:50px;
flex-direction:column;
align-content:space-around;
align-items:center;
justify-content:space-evenly;
background:transparent;
border:0;
display:none;
z-index:99;

${({ isActive }) =>
    isActive &&
    css`
      span:first-child {
        position: absolute;
        transform: rotate(225deg);
      }
      span:last-child {
        position: absolute;
        transform: rotate(315deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
    `}
   @media(max-width:560px){
     display:flex;
   } 

`
const HamburgerSpan = styled.span`
  width:25px;
  border-radius:1px;
  height:2px;
  background:#D94E5B;
  transition:.2s transform;
`


const Hamburger = ({isActive,onClick})=>(
    <HamburgerButton isActive={isActive} onClick={onClick}>
        <HamburgerSpan></HamburgerSpan>
        <HamburgerSpan></HamburgerSpan>
        <HamburgerSpan></HamburgerSpan>
    </HamburgerButton>
)

Hamburger.propTypes={
    isActive:PropTypes.bool.isRequired,
    onClick:PropTypes.func.isRequired,
}
export default Hamburger;