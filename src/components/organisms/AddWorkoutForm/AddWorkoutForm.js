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
import { addWorkout as addWorkoutAction } from 'actions';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 40%;
  width: 500px;
  min-height: 500px;
  background-color: #44494f;
  display: grid;
  align-items: center;
  transform: translate(-0, -200%);
  transition: .3s transform ,.3s opacity;
  opacity:.1;
  z-index: 9999;
  ${({ FormActive }) =>
    FormActive &&
    css`
      transform: translate(0);
      opacity:1;
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
  };

  sendWorkoutToState = () => {
    const { workoutName, exercises } = this.state;
    const { addWorkout } = this.props;

    const day = {
      workoutName,
      exercises,
    };
    if (day.exercises.length > 0) {
      addWorkout(day);
      // to na końcu
      this.setState({
        Workout: day,
        exercises: [],
        workoutName: '',
      });
    }
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
  addWorkout: PropTypes.func.isRequired,
};
AddWorkout.defaultProps = {
  FormActive: false,
};
const mapDispatchToProps = dispatch => ({
  addWorkout: workout => dispatch(addWorkoutAction(workout)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AddWorkout);
