import firebase from 'firebaseConfig';

const databaseRef = firebase.database().ref();
const userDetailsRef = databaseRef.child('user-details');

const registerAction = (name, email, password) => async dispatch => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)

    .then(function(user) {
      userDetailsRef.push().set({ userId: user.user.uid, userName: name });

      dispatch({ type: 'REGISTER', payload: true });
    })
    .catch(function(error) {
      alert(error);
    });
};

export default registerAction;
