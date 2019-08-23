import { SIGN_IN_FAILURE,SIGN_UP_FAILURE,} from 'actions';

const initialState = {
  error: null,
};

export default function error(state = initialState, action) {
  switch (action.type) {
    
      case SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload.message,
      };
     
       case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
;