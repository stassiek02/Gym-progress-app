import React from 'react';
import styled from 'styled-components';
import { ExerciseBlock } from 'components/atoms/ExerciseBlock/ExerciseBlock';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  min-height: 300px;
  width: 40vw;
  background-color: ${({ theme }) => theme.primary};
  transition: 0.2s transform, box-shadow 0.2s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.2);
  }
`;
const ExerciseWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 50px 30px;
`;
const InnerWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  text-align: center;
`;

const Card = ({ workout }) => (
  <StyledWrapper>
    <InnerWrapper>
      <Heading as="h2" big>
        {workout.workoutName}
      </Heading>
    </InnerWrapper>
    <ExerciseWrapper>
      {workout.exercises.map(item => (
        <ExerciseBlock parameters={item} />
      ))}
    </ExerciseWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  workout: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.string])).isRequired,
};
export default Card;
