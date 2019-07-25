import React, { useState, useEffect, Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import UserPageTemplate from 'templates/UserPageTemplate';
import AddWorkoutForm from 'components/organisms/AddWorkoutForm/AddWorkoutForm';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PlusIcon from 'assets/icons/plus.svg';
import GridTemplate from 'templates/GridTemplate';
import firebase from 'firebaseConfig';
import { fetchRoutine as fetchRoutineAction, verifyAuth } from 'actions';

const AddWorkoutButton = styled(ButtonIcon)`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.secondary};
  position: absolute;
  bottom: 30px;
  right: 30px;
  background-size: 50%;
`;
class Workout extends Component {
  state = {
    isFormOpen: false,
    routineLoaded: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      this.props.fetchRoutine();

      setTimeout(() => {
        this.setState({
          routineLoaded: true,
        });
      }, 900);
    }
  }

  transformObjToArray() {
    const { routine } = this.props.routine;
    const routineValues = Object.entries(routine[0]);
    console.log(routineValues);
    return routineValues;
  }

  renderRoutine() {
    const { routine } = this.props.routine;
    if (routine.length > 0) {
      const routineValues = this.transformObjToArray();
      return routineValues.map(workout => <Card workout={workout} />);
    }
    return <h1>There isn't any workout added</h1>;
  }

  toggleForm = () => {
    this.setState(prevState => ({
      isFormOpen: !prevState.isFormOpen,
    }));
  };

  render() {
    const { isFormOpen, routineLoaded } = this.state;
    const { routine } = this.props;
    return (
      <>
        <UserPageTemplate />
        <AddWorkoutForm FormActive={isFormOpen} toggleForm={this.toggleForm} />
        <AddWorkoutButton icon={PlusIcon} onClick={() => this.toggleForm()} />
        <GridTemplate>{routineLoaded ? this.renderRoutine() : <h1>loading</h1>}</GridTemplate>
      </>
    );
  }
}

const mapStateToProps = ({ routineReducer, authReducer }) => {
  const routine = routineReducer;
  const authenticated = authReducer.authenticated;
  const userId = authReducer.user;

  return { routine, authenticated, userId };
};
const mapDispatchToProps = dispatch => ({
  verifyAuth: () => dispatch(verifyAuth()),
  fetchRoutine: () => dispatch(fetchRoutineAction()),
});
Workout.propTypes = {
  routine: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Workout);
