import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from 'components/molecules/Card/Card';
import UserPageTemplate from 'templates/UserPageTemplate';
import {
  fetchSessions as fetchSessionsAction,
  removeSession as removeSessionAction,
} from 'actions';
import GridTemplate from 'templates/GridTemplate';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PlusIcon from 'assets/icons/plus.svg';
import AddSessionForm from 'components/organisms/AddSessionForm/AddSessionForm';
import PropTypes from 'prop-types';

const AddWorkoutButton = styled(ButtonIcon)`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.secondary};
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-size: 50%;
  z-index: 99;
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

  renderSessions() {
    const { sessions, removeSession } = this.props;
    if (sessions) {
      const sessionValues = Object.entries(sessions);
      return sessionValues.map(item => (
        <Card
          workout={item}
          key={item[0]}
          exercises={item[1].session}
          id={item[0]}
          name={`Session from ${item[1].createdAt}`}
          removeItem={removeSession}
        />
      ));
    }
    return <h1>Please add your routine first</h1>;
  }

  render() {
    const { isFormOpen, sessionLoaded } = this.state;
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
Sessions.propTypes = {
  sessions: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  removeSession: PropTypes.func.isRequired,
  fetchSessions:PropTypes.func.isRequired,
};
const mapStateToProps = ({ routineReducer }) => {
  const { routine, sessions } = routineReducer;
  return { routine, sessions };
};
const mapDispatchToProps = dispatch => ({
  fetchSessions: () => dispatch(fetchSessionsAction()),
  removeSession: id => dispatch(removeSessionAction(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sessions);
