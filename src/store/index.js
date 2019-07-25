import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from 'reducers';
import { verifyAuth } from 'actions';
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));

configureStore.dispatch(verifyAuth());
/* eslint-enable */
export default configureStore;
