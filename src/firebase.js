// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { addDoc, setDoc, doc } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNa8eBvzPici0sfOXzxowun9iPGaTQzjQ",
  authDomain: "healthcarepj-2e8a8.firebaseapp.com",
  projectId: "healthcarepj-2e8a8",
  storageBucket: "healthcarepj-2e8a8.appspot.com",
  messagingSenderId: "416523084565",
  appId: "1:416523084565:web:22b5ab05fe08019500ff1c",
  measurementId: "G-38CTJGCYQ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Firedb = getFirestore();

export default Firedb;
