// src/firebase.firebaseconfig.jsx
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDpXcHffg3RjX4ochhM9BRSBNz2PU7mz9Y",
  authDomain: "multitech-76495.firebaseapp.com",
  projectId: "multitech-76495",
  storageBucket: "multitech-76495.appspot.com",
  messagingSenderId: "665432025464",
  appId: "1:665432025464:android:d347cfdca6e353e83b408d",
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };
