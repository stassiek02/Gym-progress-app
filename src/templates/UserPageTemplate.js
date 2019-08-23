import React from 'react';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
    margin-top:100px;
  

  @media(max-width:768px){
    padding-left:0;
  }
`;


const UserPageTemplate = ({ children }) => (
  <StyledWrapper>
    <Sidebar />
    {children}
  </StyledWrapper>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

export default UserPageTemplate;
