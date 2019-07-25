import React, { Component } from 'react';
import { Input } from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import styled from 'styled-components';

const AddExerciseSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  sets: Yup.number()
    .min(1, 'Add more series')
    .max(99, 'Too many series! Slow down'),
  reps: Yup.number()
    .min(1, 'Add more reps')
    .max(99, 'Too many reps! Slow down'),
});
const StyledErrors = styled.span`
  color: white;
`;

class AddExerciseForm extends Component {
  state = {
    exercise: [],
  };

  render() {
    const { getExercises } = this.props;
    return (
      <>
        <Formik
          initialValues={{ name: '', sets: '', reps: '' }}
          validationSchema={AddExerciseSchema}
          // eslint-disable-next-line no-undef
          onSubmit={(values, a: actions) => {
            a.resetForm();

            const newExercise = values;
            this.setState(prevState => ({
              exercise: [...prevState.exercise, newExercise],
            }));

            getExercises(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,

            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Exercise"
              />
              <StyledErrors>{errors.name && touched.name && errors.name}</StyledErrors>
              <Input
                type="number"
                name="sets"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Sets"
                value={values.sets}
              />
              <StyledErrors>{errors.sets && touched.sets && errors.sets}</StyledErrors>
              <Input
                type="number"
                name="reps"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.reps}
                placeholder="Reps"
              />
              <StyledErrors>{errors.reps && touched.reps && errors.reps}</StyledErrors>
              <Button type="submit">Add new exercise</Button>
            </form>
          )}
        </Formik>
      </>
    );
  }
}
AddExerciseForm.propTypes = {
  getExercises: PropTypes.func.isRequired,
};
export default AddExerciseForm;
