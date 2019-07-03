/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { Formik } from 'formik';

const StyledWrapper = styled.div`
  width: 600px;
  height: 400px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class AddExerciseForm extends Component {
  state = {
    exercise: [],
  };

  render() {
    return (
      <StyledWrapper>
        <Heading big>Add new workout</Heading>
        <Formik
          initialValues={{ exerciseName: '', sets: '', reps: '' }}
          //   validate={values => {
          //     const errors = {};
          //     if (!values.email) {
          //       errors.email = 'Required';
          //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          //       errors.email = 'Invalid email address';
          //     }
          //     return errors;
          //   }}
          onSubmit={values => {
            const newExercise = values;
            this.setState(prevState => ({
              exercise: [...prevState.exercise, newExercise],
            }));
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="exerciseName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.exerciseName}
                placeholder="Exercise Name"
              />
              <Input
                type="number"
                name="sets"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Sets"
              />
              <Input
                type="number"
                name="reps"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.reps}
                placeholder="Reps"
              />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
        <Input placeholder="Exercise Name" name="exerciseName" />
        <Input placeholder="Sets" name="sets" />
        <Input placeholder="Reps" name="reps" />
        <Button onClick={this.addNewExercise}>Add exercise</Button>
      </StyledWrapper>
    );
  }
}

export default AddExerciseForm;
