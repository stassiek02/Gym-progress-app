import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2vw;
  gird-wrap: wrap;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 0.5fr);
    grid-gap: 2vw;
  }
  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 0.5fr);
    grid-gap: 2vw;
  }
  @media (min-width: 2000px) {
    grid-template-columns: repeat(3, 0.5fr);
    grid-gap: 2vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const GridTemplate = ({ children }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledPageHeader>
        <Heading big>Workout routine</Heading>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default GridTemplate;
