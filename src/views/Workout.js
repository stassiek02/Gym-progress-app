import React from 'react';
import Card from 'components/molecules/Card/Card';
import UserPageTemplate from 'templates/UserPageTemplate';
import AddExerciseForm from 'components/organisms/AddExerciseForm/AddExerciseForm';
import GridTemplate from '../templates/GridTemplate';

const workoutA = [
  {
    name: 'Martwy ciąg',
    sets: '5',
    reps: '5',
  },
  {
    name: 'przysiad',
    sets: '5',
    reps: '5',
  },
  {
    name: 'przysiad',
    sets: '5',
    reps: '5',
  },
  {
    name: 'przysiad',
    sets: '5',
    reps: '5',
  },
];
const workoutB = [
  {
    name: 'Martwy ciąg',
    sets: '5',
    reps: '5',
  },
  {
    name: 'przysiad',
    sets: '5',
    reps: '5',
  },
  {
    name: 'przysiad',
    sets: '5',
    reps: '5',
  },
  {
    name: 'przysiad',
    sets: '5',
    reps: '5',
  },
];
const workoutC = [
  {
    name: 'Martwy ciąg',
    sets: '5',
    reps: '5',
  },
  {
    name: 'przysiad',
    sets: '5',
    reps: '5',
  },
  {
    name: 'przysiad',
    sets: '5',
    reps: '5',
  },
  {
    name: 'przysiad',
    sets: '5',
    reps: '5',
  },
];
const workouts = [workoutA, workoutB, workoutC];

const all = { workoutA: [] };

const Workout = () => (
  <>
    <UserPageTemplate />
    <AddExerciseForm />
    {/* <GridTemplate>
      {workouts.map((item, index) => (
        <Card workout={item} title={index + 1} />
      ))} */}
  </>
);

export default Workout;
