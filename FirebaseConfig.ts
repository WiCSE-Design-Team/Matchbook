// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAggtsPb32oNVGgLmbFKSV53hWLWHylFsQ",
  authDomain: "matchbook-e8edb.firebaseapp.com",
  projectId: "matchbook-e8edb",
  storageBucket: "matchbook-e8edb.firebasestorage.app",
  messagingSenderId: "706233936861",
  appId: "1:706233936861:web:e3c9297137eb27c8e4a434"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);