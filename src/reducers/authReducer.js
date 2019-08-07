import { SIGN_IN_SUCCESS,SIGN_IN_FAILURE,SIGN_UP_SUCCESS,SIGN_UP_FAILURE, SIGN_OUT_USER} from 'actions';

const initialState = {
  authenticated: false,
  error: null,
  user: '',
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        error: null,
        user: action.payload,
      };
      case SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload.message,
      };
      case SIGN_UP_SUCCESS:
      return {
        ...state,
        authenticated: true,
        error: null,
        user: action.payload,
      };
       case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        error: null,
        user: null,
      };
    
    default:
      return state;
  }
}
