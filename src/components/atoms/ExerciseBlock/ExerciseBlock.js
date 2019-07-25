import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: inline-block;
  color: white;
  background-color: transparent;
  min-width: 150px;
  margin: 5px;
`;
const StyledHeading = styled(Heading)`
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  margin: 0 auto;
  padding: 5px;
  overflow: hidden;
  display: block;
`;
const StyledParagraph = styled.p`
  padding: 10px;
  margin: 0;
  position: relative;
  text-align: center;
`;
export const ExerciseBlock = ({ parameters }) => (
  <StyledWrapper>
    <StyledHeading big>{parameters.name}</StyledHeading>
    <StyledParagraph>
      {parameters.sets} sets of {parameters.reps}
    </StyledParagraph>
  </StyledWrapper>
);

ExerciseBlock.propTypes = {
  parameters: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
