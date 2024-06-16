// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDnBV3QLT9dK29bPzbKlcN7gg0RnR0Tno",
  authDomain: "learn-basic-1-c3280.firebaseapp.com",
  projectId: "learn-basic-1-c3280",
  storageBucket: "learn-basic-1-c3280.appspot.com",
  messagingSenderId: "741936483062",
  appId: "1:741936483062:web:a66ed3bf61713a4aadbad7",
  measurementId: "G-J664383Z66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)

export default auth