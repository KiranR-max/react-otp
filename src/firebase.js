import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBJ3XFacd2HKCuZqGDCwBFVL2RUHrPyUnY",
  authDomain: "otp-sagar.firebaseapp.com",
  projectId: "otp-sagar",
  storageBucket: "otp-sagar.appspot.com",
  messagingSenderId: "369775540132",
  appId: "1:369775540132:web:f8f2643438b4f13f4b7331",
  measurementId: "G-Y27DTNWFRH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
