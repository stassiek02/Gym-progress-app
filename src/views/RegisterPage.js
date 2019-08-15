import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { Redirect,Link } from 'react-router-dom';
import {routes} from 'routes';
import PropTypes from 'prop-types';
import AuthTemplete from 'templates/AuthTemplete';
import { Input } from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

import { connect } from 'react-redux';
import { signUp } from 'actions';
import * as Yup from 'yup';

const StyledParagraph = styled.p`
color:white;
padding-top:10px;
text-align:center;
`
const StyledLink = styled(Link)`
  color:white;
  text-decoration:none;
  font-weight:${({theme})=>theme.bold};
`
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 60px;
`;
const StyledErrors = styled.span`
  color: red;
`;
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string().required('Password is required'),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

// eslint-disable-next-line no-shadow
const RegisterPage = ({ signUp,authenticated,error }) => (
  <AuthTemplete>
    <Heading as="h3" big>
      Sign In
    </Heading>
    {error?<StyledErrors>Something went wrong</StyledErrors>:null}
    <Formik
      initialValues={{ email: '', password: '', passwordConfirmation: '', username: '' }}
      validationSchema={SignupSchema}
      // eslint-disable-next-line no-undef
      onSubmit={(values, a: actions) => {
        signUp(values.email, values.password);
        a.resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        
        /* and other goodies */
      }) => {
        if (authenticated) {
          return <Redirect to={routes.workout} />;
        }
        return (
          <StyledForm onSubmit={handleSubmit}>
            <Input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              placeholder="Full name"
            />
            <StyledErrors>{errors.username && touched.username && errors.username}</StyledErrors>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email Address"
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
            <Input
              type="password"
              name="passwordConfirmation"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordConfirmation}
              placeholder="Confirm Password"
            />

            <StyledErrors>
              {errors.passwordConfirmation &&
                touched.passwordConfirmation &&
                errors.passwordConfirmation}
            </StyledErrors>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <StyledParagraph><StyledLink to={routes.login}>Click here to sign in <span role="img" aria-label="highfive">🖐</span></StyledLink></StyledParagraph>
            
          </StyledForm>
          
        );
      }}
    </Formik>
    
  </AuthTemplete>
);
RegisterPage.propTypes = {
  signUp: PropTypes.func.isRequired,
  authenticated:PropTypes.bool,
};
RegisterPage.defaultProps ={
  authenticated:false,
}

const mapStateToProps = ({ authReducer }) => {
  const {authenticated,error} = authReducer
  return { authenticated,error };
};
const mapDispatchToProps = dispatch => ({
  signUp: (email, password) => dispatch(signUp(email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPage);
