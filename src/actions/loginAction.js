import firebase from 'firebaseConfig';

const loginAction = (email, password) => async dispatch => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(user) {
      const user1 = firebase.auth().currentUser;
      console.log(user1.uid);

      dispatch({ type: 'LOGIN', payload: 'true' });
    })
    .catch(function(error) {
      alert(error);
    });
};

export default loginAction;
