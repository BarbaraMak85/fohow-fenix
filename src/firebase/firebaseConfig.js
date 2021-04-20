import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmMzkoGFiBp0FrPiWcvC7ZHl7HHfm0iLI",
  authDomain: "fohowfenix-ca70d.firebaseapp.com",
  projectId: "fohowfenix-ca70d",
  storageBucket: "fohowfenix-ca70d.appspot.com",
  messagingSenderId: "176987582780",
  appId: "1:176987582780:web:e5b583ab581b2650eeae39",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
