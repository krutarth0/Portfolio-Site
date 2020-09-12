import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBF4WZLS62eG02wsqnZETh4p8q9rC4sTo8",
    authDomain: "pramerica-6c061.firebaseapp.com",
    databaseURL: "https://pramerica-6c061.firebaseio.com",
    projectId: "pramerica-6c061",
    storageBucket: "pramerica-6c061.appspot.com",
    messagingSenderId: "467991754612",
    appId: "1:467991754612:web:bef8ab79cfa9f7d0459e21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export const auth = firebase.auth;
export const projectFirestore = firebase.firestore();
export const projectStorage = firebase.storage();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;