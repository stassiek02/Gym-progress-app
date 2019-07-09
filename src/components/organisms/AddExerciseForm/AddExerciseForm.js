import React, { Component } from 'react';
import { Input } from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

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
      </>
    );
  }
}
AddExerciseForm.propTypes = {
  getExercises: PropTypes.func.isRequired,
};
export default AddExerciseForm;
