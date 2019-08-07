import {
  ADD_WORKOUT_REQUEST,
  ADD_WORKOUT_SUCCESS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from 'actions';

const INITIAL_STATE = {
  routine: [],
  isLoading: false,
};

// eslint-disable-next-line no-unused-vars
const routineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_WORKOUT_REQUEST:
      return {
        ...state,
      };
    case ADD_WORKOUT_SUCCESS:
      return {
        ...state,
      };

    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_SUCCESS:
        return {
          ...state,
          routine: action.payload,
          isLoading: false,
        };
    default:
      return state;
  }
};

export default routineReducer;
