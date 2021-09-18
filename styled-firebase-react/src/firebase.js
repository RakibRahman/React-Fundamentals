import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjxFWS5Risl7a5xUD5qpYc_fEfl7uJHJc",
  authDomain: "auth-demo-48788.firebaseapp.com",
  projectId: "auth-demo-48788",
  storageBucket: "auth-demo-48788.appspot.com",
  messagingSenderId: "718237070210",
  appId: "1:718237070210:web:479c49814cf341c05fd59b",
};

const fireAuth = firebase.initializeApp(firebaseConfig);
export const auth = fireAuth.auth();
export default fireAuth;
