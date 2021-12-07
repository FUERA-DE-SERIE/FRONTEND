// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWn94-kpSjylyVvR-F-uJq7d5DCfI8BhM",
  authDomain: "react-auth-app-2d7ba.firebaseapp.com",
  projectId: "react-auth-app-2d7ba",
  storageBucket: "react-auth-app-2d7ba.appspot.com",
  messagingSenderId: "1416198957",
  appId: "1:1416198957:web:adec7dedcb486baa49b1a4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  firebase,
  db,
  googleAuthProvider
}