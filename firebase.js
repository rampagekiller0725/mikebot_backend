

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvqIGQZh1dkK_ojQwG2qb1CVbqWP3JsqM",
  authDomain: "mikebot-db.firebaseapp.com",
  projectId: "mikebot-db",
  storageBucket: "mikebot-db.appspot.com",
  messagingSenderId: "995717964880",
  appId: "1:995717964880:web:d4b6e9bbaaffbe850c1d55",
  measurementId: "G-7KXDRPY346"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);