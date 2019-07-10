import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { ExerciseBlock } from 'components/atoms/ExerciseBlock/ExerciseBlock';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';

const StyledWrapper = styled.div`
  min-height: 300px;
  background-color: ${({ theme }) => theme.primary};
  transition: 0.2s transform, box-shadow 0.2s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.2);
  }

  @media (max-width: 860px) {
    width: 35vw;
  }
  @media (max-width: 120px) {
    width: 40vw;
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
  position: relative;
`;
const StyledButton = styled(Button)`
  position:absolute;
  top:0;
  right:0;
  padding:0;
  width:30px;
  height:30px;
  font-size:${({ theme }) => theme.fontSize.xl}
  text-align:center;
  cursor:pointer;
`;

const Card = ({ workout, removeItem }) => {
  return (
    <StyledWrapper>
      <InnerWrapper>
        <Heading as="h2" big>
          {workout.workoutName}
        </Heading>
        <StyledButton onClick={() => removeItem(workout.id)}>X</StyledButton>
      </InnerWrapper>
      <ExerciseWrapper>
        {workout.exercises.map(item => (
          <ExerciseBlock parameters={item} />
        ))}
      </ExerciseWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  workout: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.string])).isRequired,
  removeItem: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItemAction(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Card);
