import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDqxvky9QplU3Wso74MRcI3W46vJCu637Q",
  authDomain: "coffee-chat-90f5d.firebaseapp.com",
  databaseURL: "https://coffee-chat-90f5d.firebaseio.com",
  projectId: "coffee-chat-90f5d",
  storageBucket: "coffee-chat-90f5d.appspot.com",
  messagingSenderId: "352878256726",
  appId: "1:352878256726:web:4fa6eb3154e66ba32351f7",
  measurementId: "G-DN0EDHGE97",
});

export default app;
