// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB6l4O3HzzZ3uMHseKjS7L-X2voEFdRSo",
  authDomain: "twitterapp-aad25.firebaseapp.com",
  projectId: "twitterapp-aad25",
  storageBucket: "twitterapp-aad25.appspot.com",
  messagingSenderId: "871128450978",
  appId: "1:871128450978:web:25893a5eb84d3b4cbc94fb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Authentification

export const auth = getAuth();
