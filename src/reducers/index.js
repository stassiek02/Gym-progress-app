const initialState = [
  {
    workoutName: 'Push',
    exercises: [
      {
        name: 'Bench Press',
        reps: 2,
        sets: 1,
      },
      { name: 'Row Seal', reps: 5, sets: 3 },
    ],
  },
  {
    workoutName: 'Pull',
    exercises: [
      {
        name: 'Bench row',
        reps: 2,
        sets: 1,
      },
      { name: 'Row Seal', reps: 5, sets: 3 },
    ],
  },
];

// eslint-disable-next-line no-unused-vars
const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
