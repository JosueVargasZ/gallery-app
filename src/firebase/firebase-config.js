import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDAxyDehRzsI7jKTuLQWEPEezTFbyitIdU",
    authDomain: "gallery-app-73893.firebaseapp.com",
    projectId: "gallery-app-73893",
    storageBucket: "gallery-app-73893.appspot.com",
    messagingSenderId: "50465053189",
    appId: "1:50465053189:web:b669b793aa1c39b019da6c"
  };

//   Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  // const storage = firebase.storage();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      // storage,
      googleAuthProvider,
      firebase
  }