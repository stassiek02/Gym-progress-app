import {
  ADD_WORKOUT_REQUEST,
  ADD_WORKOUT_SUCCESS,
  ADD_SESSION_REQUEST,
  ADD_SESSION_SUCCESS,
  FETCH_WORKOUT_REQUEST,
  FETCH_WORKOUT_SUCCESS,
  FETCH_SESSIONS_REQUEST,
  FETCH_SESSIONS_SUCCESS,
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
      case ADD_SESSION_SUCCESS:
      return {
        ...state,
      };
      case ADD_SESSION_REQUEST:
      return {
        ...state,
      };

    case FETCH_WORKOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_WORKOUT_SUCCESS:
        return {
          ...state,
          routine: action.payload,
          isLoading: false,
        };
        case FETCH_SESSIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_SESSIONS_SUCCESS:
        return {
          ...state,
          sessions: action.payload,
          isLoading: false,
        };
    default:
      return state;
  }
};

export default routineReducer;
