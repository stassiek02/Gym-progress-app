/* eslint-disable no-sequences */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import AddExerciseForm from 'components/organisms/AddExerciseForm/AddExerciseForm';
import Heading from 'components/atoms/Heading/Heading';
import { ExerciseBlock } from 'components/atoms/ExerciseBlock/ExerciseBlock';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 40%;
  width: 500px;
  min-height: 500px;
  background-color: #303439;
  display: grid;
  align-items: center;
  transform: translate(-0, -200%);
  transition: 0.3s transform ease-in-out;
  ${({ FormActive }) =>
    FormActive &&
    css`
      transform: translate(0);
    `}
`;
const StyledButton = styled(Button)`
  margin-bottom: 20px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ExercisesList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  min-height: 100px;
`;
class AddWorkout extends Component {
  state = {
    exercises: [],
    workoutName: '',
  };

  getExercises = values => {
    const newExercise = values;
    this.setState(prevState => ({
      exercises: [...prevState.exercises, newExercise],
    }));
  };

  handleChange = event => {
    this.setState({
      workoutName: event.target.value,
    });
    // eslint-disable-next-line no-console
    console.log(this.state);
  };

  sendWorkoutToState = () => {
    const { workoutName } = this.state;
    const { exercises } = this.state;
    // const Workout = {
    //   [workoutName]: exercises,
    // };

    const day = {
      workoutName,
      exercises,
    };
    // to na końcu
    this.setState({
      Workout: day,
      exercises: [],
      workoutName: '',
    });
  };

  render() {
    const { workoutName, exercises } = this.state;
    const { FormActive, toggleForm } = this.props;
    return (
      <StyledWrapper FormActive={FormActive}>
        <InnerWrapper>
          <Input placeholder="Workout Name" value={workoutName} onChange={this.handleChange} />
          <AddExerciseForm getExercises={this.getExercises} />
          <Heading>List of exercises:</Heading>
          <ExercisesList>
            {exercises.length !== 0
              ? exercises.map(item => <ExerciseBlock parameters={item} />)
              : null}
          </ExercisesList>
          <StyledButton onClick={() => (this.sendWorkoutToState(this.state), toggleForm())}>
            Sumbmit Workout
          </StyledButton>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}
AddWorkout.propTypes = {
  FormActive: PropTypes.bool,
  toggleForm: PropTypes.func.isRequired,
};
AddWorkout.defaultProps = {
  FormActive: false,
};
export default AddWorkout;
