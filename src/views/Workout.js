import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import UserPageTemplate from 'templates/UserPageTemplate';
import AddWorkoutForm from 'components/organisms/AddWorkoutForm/AddWorkoutForm';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PlusIcon from 'assets/icons/plus.svg';
import GridTemplate from 'templates/GridTemplate';
import { fetchRoutine as fetchRoutineAction,removeWorkout as removeWorkoutAction } from 'actions';

const AddWorkoutButton = styled(ButtonIcon)`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.secondary};
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-size: 50%;
  z-index: 999;
`;
class Workout extends Component {
  static transformObjToArray(routine) {
    const routineValues = Object.entries(routine);
    return routineValues;
  }

  state = {
    isFormOpen: false,
    routineLoaded: false,
  };

  componentDidMount() {
    const { fetchRoutine } = this.props;
    fetchRoutine();
    this.setState({
      routineLoaded: true,
    });
  }

  toggleForm = () => {
    this.setState(prevState => ({
      isFormOpen: !prevState.isFormOpen,
    }));
  };

  renderRoutine() {
    const { routine,removeWorkout } = this.props;
    if (routine !== null) {
      const routineValues = Object.entries(routine);

      return routineValues.map((item) =>(
        <Card  key={item[0]} exercises={item[1].workout.exercises} id={item[0]} name={item[1].workout.workoutName} removeItem={removeWorkout}/>
      ))
    }
    return <h1>There isn t any workout added</h1>;
  }

  render() {
    const { isFormOpen, routineLoaded } = this.state;
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

const mapStateToProps = ({ routineReducer }) => {
  const { routine } = routineReducer;
  return { routine };
};
const mapDispatchToProps = dispatch => ({
  fetchRoutine: () => dispatch(fetchRoutineAction()),
  removeWorkout: id => dispatch(removeWorkoutAction(id)),
});
Workout.propTypes = {
  routine: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  fetchRoutine: PropTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Workout);
