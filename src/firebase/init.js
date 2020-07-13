// Your web app's Firebase configuration
import firebase from "firebase";
import firestore from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAV1yCd8zCZ6dfSIF9vAqQJCENW-XmF6wo",
  authDomain: "ninja-smoothies-25575.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-25575.firebaseio.com",
  projectId: "ninja-smoothies-25575",
  storageBucket: "ninja-smoothies-25575.appspot.com",
  messagingSenderId: "293722436360",
  appId: "1:293722436360:web:5a92397a1a0be5ac4872bd",
  measurementId: "G-KV7RTV81TK"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// firebase.analytics();

//eport firestore database
export default firebaseApp.firestore();
