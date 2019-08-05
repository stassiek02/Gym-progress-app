import {
  ADD_WORKOUT_REQUEST,
  ADD_WORKOUT_SUCCESS,
  ADD_WORKOUT_FAILURE,
  REMOVE_WORKOUT_REQUEST,
  REMOVE_WORKOUT_SUCCESS,
  REMOVE_WORKOUT_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
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
      if (action.payload !== null)
        return {
          ...state,
          routine: [action.payload.routine],
          isLoading: false,
        };
    case REMOVE_WORKOUT_SUCCESS:
      console.log(action)
      return {
        ...state,        
      };
    default:
      return state;
      
  }
};

export default routineReducer;
