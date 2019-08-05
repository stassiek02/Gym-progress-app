import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from 'reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig ={
    key:'root',
    storage,
    blacklist:['routineReducer'],
}
const persistedReducer = persistReducer(persistConfig,rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = createStore(persistedReducer, composeEnhancers(applyMiddleware(reduxThunk)));
export const  persistor = persistStore(configureStore);

/* eslint-disable no-underscore-dangle */




/* eslint-enable */

