/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { Formik } from 'formik';
import { ExerciseBlock } from 'components/atoms/ExerciseBlock/ExerciseBlock';
import PropTypes from 'prop-types';

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
    const { exercise } = this.state;
    const { getExercises } = this.props;
    return (
      <StyledWrapper>
        <Heading big>Add new exercise</Heading>
        <Formik
          initialValues={{ exerciseName: '', sets: '', reps: '' }}
          // eslint-disable-next-line no-undef
          onSubmit={(values, a: actions) => {
            a.resetForm();

            const newExercise = values;
            this.setState(prevState => ({
              exercise: [...prevState.exercise, newExercise],
            }));

            setTimeout(getExercises(exercise), 90);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,

            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="exerciseName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.exerciseName}
                placeholder="Exercise"
              />
              <Input
                type="number"
                name="sets"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Sets"
                value={values.sets}
              />
              <Input
                type="number"
                name="reps"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.reps}
                placeholder="Reps"
              />
              <Button type="submit">Add new exercise</Button>
            </form>
          )}
        </Formik>
        <div>
          {exercise.length !== 0
            ? exercise.map(item => (
                <ExerciseBlock
                  name={item.exerciseName}
                  sets={item.sets}
                  reps={item.reps}
                  key={item.exerciseName}
                />
              ))
            : null}
        </div>
      </StyledWrapper>
    );
  }
}
AddExerciseForm.propTypes = {
  getExercises: PropTypes.func.isRequired,
};
export default AddExerciseForm;
