/* eslint-disable no-shadow */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Formik, Form } from 'formik';
import AuthTemplete from 'templates/AuthTemplete';
import { Input } from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { signInUser } from 'actions';
import * as Yup from 'yup';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 60px;
`;
const StyledErrors = styled.span`
  color: white;
`;
const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .required('Password is required'),
});
const LoginPage = ({ signInUser }) => {
  return (
    <AuthTemplete>
      <Heading as="h3" big>
        Sign In
      </Heading>
      <Formik
        validationSchema={SignInSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          signInUser(values.email, values.password);
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
          <StyledForm onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="E-mail address"
            />
            <StyledErrors>{errors.email && touched.email && errors.email}</StyledErrors>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Password"
            />
            <StyledErrors>{errors.password && touched.password && errors.password}</StyledErrors>
            <Button type="submit">Submit</Button>
          </StyledForm>
        )}
      </Formik>
    </AuthTemplete>
  );
};
LoginPage.propTypes = {
  signInUser: PropTypes.func.isRequired,
};
const mapStateToProps = ({ state }) => {
  // const authenticated = authReducer.authenticated;
  return { ...state };
};

const mapDispatchToProps = dispatch => ({
  signInUser: (email, password) => dispatch(signInUser(email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
