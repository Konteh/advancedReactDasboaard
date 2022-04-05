// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "godashboard-86dbb.firebaseapp.com",
  projectId: "godashboard-86dbb",
  storageBucket: "godashboard-86dbb.appspot.com",
  messagingSenderId: "434749904428",
  appId: "1:434749904428:web:82239d6ffb5b7c97fb6389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
// Initialize Firebase