import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';


var config = {
  apiKey: "AIzaSyBF4WZLS62eG02wsqnZETh4p8q9rC4sTo8",
  authDomain: "pramerica-6c061.firebaseapp.com",
  databaseURL: "https://pramerica-6c061.firebaseio.com",
  projectId: "pramerica-6c061",
  storageBucket: "pramerica-6c061.appspot.com",
  messagingSenderId: "467991754612",
  appId: "1:467991754612:web:bef8ab79cfa9f7d0459e21"
};


const fire = firebase.initializeApp(config);



 

// class FireBase{

//     constructor(){
       
//         this.auth =  firebase.auth();
//         this.db = firebase.firestore();
//     }

//     register(name , email , password){
//         console.log("abc")
//         this.auth.createUserWithEmailAndPassword(email,password);
//         // return this.auth.currentUser.updateProfile({
//         //     displayName:name
//         // })
//     }

// }

export default fire;


