

import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAXh-rP7m19ALLaTpYl39YUqSWosRK0nTI",
    authDomain: "blood-donating-web.firebaseapp.com",
    projectId: "blood-donating-web",
    storageBucket: "blood-donating-web.appspot.com",
    messagingSenderId: "551439165181",
    appId: "1:551439165181:web:33afdd928ff33e684dc094",
    measurementId: "G-8XSGGD7LY5"
  };
  // Initialize Firebase
  export const fire =  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const db = firebase.firestore();
//   export const auth = firebase.auth();
//   export const storage = firebase.storage();