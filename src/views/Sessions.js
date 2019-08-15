import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from 'components/molecules/Card/Card';
import UserPageTemplate from 'templates/UserPageTemplate';
import { fetchRoutine as fetchRoutineAction , fetchSessions as fetchSessionsAction } from 'actions';
import GridTemplate from 'templates/GridTemplate';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PlusIcon from 'assets/icons/plus.svg';
import AddSessionForm from 'components/organisms/AddSessionForm/AddSessionForm';


const AddWorkoutButton = styled(ButtonIcon)`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.secondary};
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-size: 50%;
  z-index: 999;
`;

class Sessions extends Component {
  state = { isFormOpen: false, sessionLoaded: false };

  componentDidMount() {
    const { fetchSessions } = this.props;
    fetchSessions();
    this.setState({
      sessionLoaded: true,
    });
  }
  toggleForm = () => {
    this.setState(prevState => ({
      isFormOpen: !prevState.isFormOpen,
    }));
  };

  renderSessions(){
    const {sessions} = this.props;
    if (sessions) {
      const sessionValues = Object.entries(sessions);
      console.log(sessionValues)
     return sessionValues.map((item) =>(
        console.log(item),
        <Card workout={item} key={item[0]} exercises={item[1].session} id={item[0]} name="w fazie testów"/>
      ))
    }
    return <h1>There isn t any workout added</h1>;
  }

  render() {
    const { sessions } = this.props;
    const { isFormOpen,sessionLoaded } = this.state;
    return (
      <>
        <UserPageTemplate />
        <AddSessionForm FormActive={isFormOpen} toggleForm={this.toggleForm} />
        <AddWorkoutButton icon={PlusIcon} onClick={() => this.toggleForm()} />

        <GridTemplate>{sessionLoaded ? this.renderSessions() : <h1>loading</h1>}</GridTemplate>
      </>
    );
  }
}

const mapStateToProps = ({ routineReducer }) => {
  const { routine,sessions } = routineReducer;
  return { routine,sessions };
};
const mapDispatchToProps = dispatch => ({
  fetchSessions: () => dispatch(fetchSessionsAction()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sessions);
