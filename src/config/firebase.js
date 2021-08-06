import firebase from 'firebase'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDioI2LCer8Oe3d_FsfNPFirUYdl2y_Nvk",
    authDomain: "sans-todo.firebaseapp.com",
    projectId: "sans-todo",
    storageBucket: "sans-todo.appspot.com",
    messagingSenderId: "877608903624",
    appId: "1:877608903624:web:38970e6065009753a996fd",
    measurementId: "G-XL1TRWHWE2"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

export  const db = firebase.firestore()