/* eslint-disable no-unused-vars */
import firebase from 'firebaseConfig';

export const ADD_WORKOUT_REQUEST = 'ADD_WORKOUT_REQUEST';
export const ADD_WORKOUT_SUCCESS = 'ADD_WORKOUT_SUCCESS';
export const ADD_WORKOUT_FAILURE = 'ADD_WORKOUT_FAILURE';

export const REMOVE_WORKOUT_REQUEST = 'REMOVE_WORKOUT_REQUEST';
export const REMOVE_WORKOUT_SUCCESS = 'REMOVE_WORKOUT_SUCCESS';
export const REMOVE_WORKOUT_FAILURE = 'REMOVE_WORKOUT_FAILURE';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const fetchRoutine = routine => (dispatch, getState) => {
  const userId = getState().authReducer.user;
  dispatch({ type: FETCH_REQUEST });
  if (userId) {
    firebase
      .database()
     .ref(userId)
      .on('value', snapshot => {
       dispatch({
         type: FETCH_SUCCESS,
         payload: snapshot.val(),
       });
     });
     
  }
};

export const addWorkout = workout => (dispatch, getState) => {
  const userId = getState().authReducer.user;
  dispatch({ type: ADD_WORKOUT_REQUEST });
  firebase
    .database()
    .ref(userId)
    .child('routine')
    .push({
      workout,
    })
    .then(data => {
      dispatch({
        type: ADD_WORKOUT_SUCCESS,
        payload: workout,
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_WORKOUT_FAILURE,
        payload: err,
      });
    });
};

export const removeItem = id => (dispatch, getState) => {
  const userId = getState().authReducer.user;
  const workoutRef = firebase.database().ref(`${userId}/routine/${id}`);
  dispatch({ type: REMOVE_WORKOUT_REQUEST });
  workoutRef
    .remove()
    .then(() => {
      dispatch({
        type: REMOVE_WORKOUT_SUCCESS,
        payload:id,
      });
    })
    .catch(error => {
      dispatch({
        type: REMOVE_WORKOUT_FAILURE,
      });
    });
};
export const signIn = (email, password) => dispatch => {
  dispatch({ type: SIGN_IN_REQUEST });
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: response.user.uid,
      });
    })
    .catch(err => {
      dispatch({
        type: SIGN_IN_FAILURE,
        payload: err,
      });
    });
};
export const signUp = (email, password) => dispatch => {
  dispatch({ type: SIGN_UP_REQUEST });
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: response.user.uid,
      });
    })
    .catch(err => {
      dispatch({
        type: SIGN_UP_FAILURE,
        payload: err,
      });
    });
};

export function authUser(user) {
  return {
    type: 'AUTH_USER',
    payload: user.uid,
  };
}
export function authError(error) {
  return {
    type: 'AUTH_ERROR',
    payload: error,
  };
}

export function signOut() {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: 'SIGN_OUT_USER',

        });
      });
  };
}


export function verifyAuth() {
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser(user));
      } else {
        dispatch(signOut());
      }
    });
  };
}
