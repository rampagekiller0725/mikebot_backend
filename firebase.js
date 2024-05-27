

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrgFVNG9Y4HWh_6aXPXAeMyxb78iDq45U",
  authDomain: "mike-bot2.firebaseapp.com",
  projectId: "mike-bot2",
  storageBucket: "mike-bot2.appspot.com",
  messagingSenderId: "878609016746",
  appId: "1:878609016746:web:54c18ab9485bfa65ebedd3",
  measurementId: "G-622EYV8Q5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);