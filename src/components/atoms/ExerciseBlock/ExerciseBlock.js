import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: inline-block;
  color: white;
  width: 200px;
  height: 100px;
  background-color: #2c2c54;
  border-radius: 5px;
  transform: skew(-30deg, 0deg);
`;
const StyledHeading = styled(Heading)`
  text-align: center;
  border-bottom: 1px solid #ffb142;
  margin: 0;
  padding: 10px;
  overflow: hidden;
  transform: skew(30deg, 0deg) translateX(-14px);
`;
const StyledParagraph = styled.p`
  transform: skew(30deg, 0deg);
  margin: 0;
  position: relative;
  top: 15px;
  text-align: center;
`;
export const ExerciseBlock = ({ name, sets, reps }) => (
  <StyledWrapper>
    <StyledHeading big>{name}</StyledHeading>
    <StyledParagraph>
      {sets} sets of {reps}
    </StyledParagraph>
  </StyledWrapper>
);

ExerciseBlock.propTypes = {
  name: PropTypes.string.isRequired,
  sets: PropTypes.number.isRequired,
  reps: PropTypes.number.isRequired,
};
