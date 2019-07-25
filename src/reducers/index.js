import { combineReducers } from 'redux';
import routineReducer from './routine';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  routineReducer,
  authReducer,
});

export default rootReducer;
