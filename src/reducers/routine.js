const INITIAL_STATE = {
  routine: [],
};

// eslint-disable-next-line no-unused-vars
const routineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_WORKOUT':
      return {
        ...state,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        arr: [...state.arr].filter(item => item.id !== action.payload.id),
      };
    case 'FETCH_ROUTINE':
      if (action.payload) {
        return {
          ...state,
          routine: [action.payload.routine],
        };
      }
    default:
      break;
  }
  return state;
};

export default routineReducer;
