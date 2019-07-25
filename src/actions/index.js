/* eslint-disable no-unused-vars */
import firebase from 'firebaseConfig';

export const addWorkout = workout => {
  const userId = firebase.auth().currentUser.uid;
  return dispatch => {
    firebase
      .database()
      .ref(userId)
      .child('routine')
      .push({
        workout,
      })
      .then(() => {
        dispatch({
          type: 'ADD_WORKOUT',
          payload: workout,
        });
      });
  };
};

export function fetchRoutine() {
  return dispatch => {
    const userId = firebase.auth().currentUser.uid;

    firebase
      .database()
      .ref(userId)
      .on('value', snapshot => {
        dispatch({
          type: 'FETCH_ROUTINE',
          payload: snapshot.val(),
        });
      });
  };
}

export const removeItem = id => {
  return dispatch => {
    const userId = firebase.auth().currentUser.uid;
    const workoutRef = firebase.database().ref(`${userId}/routine/${id}`);
    workoutRef
      .remove()
      .then(() => {
        dispatch({
          type: 'REMOVE_SUCCESFUL',
        });
      })
      .catch(error => {
        dispatch({
          type: 'REMOVE_FAIL',
        });
      });
  };
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
export function signOutUser() {
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
        dispatch(signOutUser());
      }
    });
  };
}

export function signUpUser(email, password) {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        dispatch(authUser());
      })
      .catch(error => {
        dispatch(authError(error));
      });
  };
}
export function signInUser(email, password) {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        dispatch(verifyAuth());
      })
      .catch(error => {
        dispatch(authError(error));
      });
  };
}
