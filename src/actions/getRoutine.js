import firebase from 'firebaseConfig';

const databaseRef = firebase.database.ref();
const routineRef = databaseRef.child('routine');
const getRoutineAction = () => async dispatch => {
  routineRef.on('value', snapshot => {
    dispatch({ type: 'GET_ROUTINE', payload: snapshot.val() || {} });
  });
};

export default getRoutineAction;
