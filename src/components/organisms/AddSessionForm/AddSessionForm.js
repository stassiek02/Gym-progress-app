import React, { Component } from 'react';
import { Input } from 'components/atoms/Input/Input';
import Select from 'components/atoms/Select/Select'
import Button from 'components/atoms/Button/Button';
import { Formik, Field, Form, FieldArray,getIn} from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import styled, { css } from 'styled-components';
import { addSession as addSessionAction } from 'actions';

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
  transition: 0.3s transform, 0.3s opacity;
  opacity: 1;
  z-index: 9999;

  @media (max-width: 768px) {
    width: 300px;
    left: 10%;
    top: 10%;
  }

  ${({ FormActive }) =>
    FormActive &&
    css`
      transform: translate(0);
      opacity: 1;
    `}
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:60px 0;
`;
const StyledSpan = styled.span`
  color:white;
  font-weight:${({theme})=>theme.normal};
  font-size:${({theme})=>theme.fontSize.xl}
  margin-bottom:80px;
`
const StyledField = styled(Field)`
  margin: 10px 10px;
  padding: 15px;
  padding-bottom: 5px;
  border: 0px;
  border-bottom: 3px solid #505158;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background-color: transparent;
  color: white;
  font-weight: 300;
  &::placeholder{
    color:#777;
  }
  &:last-of-type{
    margin-bottom:25px;
  }

`
const StyledFormWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-content:space-around;
`
const StyledLabel = styled.label`
  color:white;
  text-align:center;
  margin-top:15px;
`
const StyledButtons = styled(Button)`
  margin:10px auto;
  background-color:${({theme})=>theme.primary};
  &:disabled{
    &:hover{
      background-color:${({theme})=>theme.primary};
    } 
  }

`
const ErrorMessage = ({name }) => (
  <Field
    name={name}
    render={({ form }) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);
      return touch && error ? error : null;
    }}
  />
);
const ValidationSchema = Yup.object().shape({
  weight: Yup.array()
    .of(
      Yup.number()
      .min(0,'Add some weight')
      .max(600,'Too much')
      .required('Add something')
      .typeError("Invalid number")
  )})

let initialValues = {};



class AddSessionForm extends Component {
  state = {
    firstStep: true,
    isWorkoutSelected: false,
    workoutSelected: null,
  };
  

  renderWorkoutsOptions() {
    const { routine } = this.props;
    if(routine){
      const workoutOptions = Object.entries(routine);
    return workoutOptions.map(item => (
      <option value={item[0]}>{item[1].workout.workoutName}</option>
    ));
    }
  }

  handleSelectChange = event => {
    this.setState({ workoutSelected: event.target.value });
  };

  createSessionObject(weightArray) {
    initialValues.map((item, index) => (item.weight = weightArray.weight[index]));
  }

  createInitialValue() {
    const { workoutSelected } = this.state;
    const { routine } = this.props;
    if(workoutSelected){
      initialValues = routine[workoutSelected].workout.exercises;
      initialValues.map(item => (item.weight = ''));
    }
    
  }

  render() {
    const { isWorkoutSelected, firstStep,workoutSelected } = this.state;
    const { addSession,FormActive,toggleForm } = this.props;
    
    return (
      <StyledWrapper FormActive={FormActive}>
        <InnerWrapper>
          {firstStep ? (
            <>
            <StyledSpan>Select your workout plan </StyledSpan>
            <Select onChange={this.handleSelectChange}>
            <option value="" selected disabled hidden>Choose here</option>
            {this.renderWorkoutsOptions()}</Select>
            </>
          ) : (
            <>
            <StyledSpan>Add weight to your exercises</StyledSpan>
            <Formik
              initialValues={initialValues}
              validationSchema={ValidationSchema}
              onSubmit={values => {
                if(values.weight){
                this.createSessionObject(values);
                addSession(initialValues);
                toggleForm();
                this.setState({
                  firstStep:true,
                })
                }
               
              }}
              render={({ values }) => (
                <Form>
                  <FieldArray
                    name="weight"
                    render={arrayHelpers => (
                      <div>
                        {initialValues && initialValues.length > 0
                          ? initialValues.map((weight, index) => (
                              <StyledFormWrapper key={index}>
                                <StyledLabel htmlFor={`weight.${index}`}>
                                  {`${initialValues[index].name } ${initialValues[index].sets} sets of  ${
                                    initialValues[index].reps
                                  } reps`}
                                </StyledLabel>
                                <StyledField
                                  type="number"
                                  name={`weight.${index}`}
                                  placeholder="Add your weight"
                                  id={`weight.${index}`}
                                />
                                <ErrorMessage name={`weight.${index}`} />
                              </StyledFormWrapper>
                            ))
                          : null}
                        
                          <Button type="summit" >Submit</Button>
                        
                      </div>
                    )}
                  />
                </Form>
              )}
            />
            </>
          )}
          {firstStep ? (
            <StyledButtons disabled={!workoutSelected}
              onClick={() =>
                this.setState(
                  { isWorkoutSelected: true, firstStep: !firstStep },
                  this.createInitialValue(),
                )
              }
            >
              Next
            </StyledButtons>
          ) : (
            <StyledButtons
              onClick={() => this.setState({ isWorkoutSelected: true, firstStep: !firstStep,workoutSelected:'', })}
            >
              Back
            </StyledButtons>
          )}
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}
const mapStateToProps = ({ routineReducer }) => {
  const { routine } = routineReducer;
  return { routine };
};
const mapDispatchToProps = dispatch => ({
  addSession: session => dispatch(addSessionAction(session)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddSessionForm);
