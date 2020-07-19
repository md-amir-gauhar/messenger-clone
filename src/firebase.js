import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyClurjNyMRmOB2Nn4xrhD8cjshM_VnVWK4",
  authDomain: "facebook-messenger-clone-58355.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-58355.firebaseio.com",
  projectId: "facebook-messenger-clone-58355",
  storageBucket: "facebook-messenger-clone-58355.appspot.com",
  messagingSenderId: "595093571665",
  appId: "1:595093571665:web:8f8da43e249a048a20d070",
  measurementId: "G-6LHRTDB1SR"
});

const db = firebaseApp.firestore();

export default db;