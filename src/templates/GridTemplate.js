import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;

  @media (max-width: 860px) {
    padding:50px;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  grid-gap: 2vw;
  gird-wrap: wrap;

  
`;

const GridTemplate = ({ children }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default GridTemplate;
