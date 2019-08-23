import { combineReducers } from 'redux';
import routineReducer from './routine';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  routineReducer,
  authReducer,
  errorReducer
});

export default rootReducer;
