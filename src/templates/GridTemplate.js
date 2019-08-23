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
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2vw;
  gird-wrap: wrap;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 0.5fr);
    
  }
  @media (max-width: 1100px) {
    grid-template-columns: auto;
    grid-gap: 2vw;
  }
  @media (min-width: 2000px) {
    grid-template-columns: auto auto auto;
    grid-gap: 2vw;

  }
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
