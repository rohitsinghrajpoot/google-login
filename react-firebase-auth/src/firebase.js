import firebase from "./firebase/app"
import "firebase/auth"


var firebaseConfig = {
    apiKey: "AIzaSyDasjLaSpntAL2YXPrGDvTKgNB7-Ag9sPo",
    authDomain: "react-firebase-auth-8ca0d.firebaseapp.com",
    projectId: "react-firebase-auth-8ca0d",
    storageBucket: "react-firebase-auth-8ca0d.appspot.com",
    messagingSenderId: "854819624246",
    appId: "1:854819624246:web:4f6be0770da6c4f7928f97"
  };

 
firebase.initializeApp(firebaseConfig)

const auth= firebase.auth()
const googleAuthProvider = new firebase.auth.googleAuthProvider()
const facebookAuthProvider = new firebase.auth.facebookAuthProvider()

export  {auth,googleAuthProvider,facebookAuthProvider};