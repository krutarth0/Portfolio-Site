import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';


 var config = {
    apiKey: "AIzaSyDbcIWWhFDV4-HPxLckPD_EETtb3OE9KJc",
    authDomain: "portfolio-project-c0cfd.firebaseapp.com",
    databaseURL: "https://portfolio-project-c0cfd.firebaseio.com",
    projectId: "portfolio-project-c0cfd",
    storageBucket: "portfolio-project-c0cfd.appspot.com",
    messagingSenderId: "582617353489",
    appId: "1:582617353489:web:92b75f00a3744f996e90b0",
    measurementId: "G-PQTVQ681N6"
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
