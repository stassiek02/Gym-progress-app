const initialState = {
  arr: [
    {
      id: '1',
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
      id: '2',
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
  ],
};

// eslint-disable-next-line no-unused-vars
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        arr: [...state.arr, action.payload.item],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        arr: [...state.arr].filter(item => item.id !== action.payload.id),
      };
    default:
      break;
  }
  return state;
};

export default rootReducer;
