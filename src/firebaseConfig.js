import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBVoS3fWn5rT5cta3A4BKPtO7X2UKAIt6U',
  authDomain: 'gym-track-82e20.firebaseapp.com',
  databaseURL: 'https://gym-track-82e20.firebaseio.com',
  projectId: 'gym-track-82e20',
  storageBucket: '',
  messagingSenderId: '1035260838986',
  appId: '1:1035260838986:web:9e0150106d802c00',
};
// Initialize Firebase
const firebaseConfig = firebase.initializeApp(config);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

export const authRef = firebase.auth();

export default firebaseConfig;
