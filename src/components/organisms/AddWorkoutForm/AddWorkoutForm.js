/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import AddExerciseForm from 'components/organisms/AddExerciseForm/AddExerciseForm';

const StyledWrapper = styled.div`
  width: 800px;
  height: 800px;
  background-color: #777;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class AddWorkout extends Component {
  state = {
    exercises: [],
    workoutName: '',
  };

  getExercises = values => {
    const newExercise = values;
    this.setState({
      exercises: newExercise,
    });
  };

  handleChange = event => {
    this.setState({
      workoutName: event.target.value,
    });
    // eslint-disable-next-line no-console
    console.log(this.state);
  };

  render() {
    const { value } = this.state;
    return (
      <StyledWrapper>
        <Input placeholder="Workout Name" value={value} onChange={this.handleChange} />
        <AddExerciseForm getExercises={this.getExercises} />

        <Button type="submit">Add new exercise</Button>
      </StyledWrapper>
    );
  }
}

export default AddWorkout;
