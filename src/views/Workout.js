import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import UserPageTemplate from 'templates/UserPageTemplate';
import AddWorkoutForm from 'components/organisms/AddWorkoutForm/AddWorkoutForm';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PlusIcon from 'assets/icons/plus.svg';
import GridTemplate from '../templates/GridTemplate';

const AddWorkoutButton = styled(ButtonIcon)`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.secondary};
  position: absolute;
  bottom: 30px;
  right: 30px;
  background-size: 50%;
`;
const Workout = ({ routine }) => {
  const [FormActive, setFormActive] = useState(false);

  function toggleForm() {
    setFormActive(FormActive === false);
  }

  return (
    <>
      <UserPageTemplate />
      <AddWorkoutForm FormActive={FormActive} toggleForm={toggleForm} />
      <AddWorkoutButton icon={PlusIcon} onClick={() => toggleForm()} />
      <GridTemplate>
        {routine.arr.map(workout => (
          <Card workout={workout} />
        ))}
      </GridTemplate>
    </>
  );
};

const mapStateToProps = state => {
  const routine = state;
  return { routine };
};
Workout.propTypes = {
  routine: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
export default connect(mapStateToProps)(Workout);
