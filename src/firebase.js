import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDncxu0PKcVIvBMHL2g5cNUu9WlYDh9jHs",
  authDomain: "facebook-98a7e.firebaseapp.com",
  projectId: "facebook-98a7e",
  storageBucket: "facebook-98a7e.appspot.com",
  messagingSenderId: "245735174544",
  appId: "1:245735174544:web:dd31f492d1c71e7b148315",
  measurementId: "G-N00MXMMZ17",
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

// initilize auth

const auth = firebase.auth();
const database = firebase.database();
