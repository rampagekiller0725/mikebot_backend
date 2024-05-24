

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNhFXe6F_WlE74DOMhycCDZLNeMvcW1Y0",
  authDomain: "mikebot-db1.firebaseapp.com",
  projectId: "mikebot-db1",
  storageBucket: "mikebot-db1.appspot.com",
  messagingSenderId: "467567246161",
  appId: "1:467567246161:web:2565c5650b3766e58ab170",
  measurementId: "G-QTV10CWLV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);