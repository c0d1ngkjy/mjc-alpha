// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjy9zFFePz2b5aiTn6BQSn80qV1b-DM8k",
  authDomain: "mjc-alpha.firebaseapp.com",
  projectId: "mjc-alpha",
  storageBucket: "mjc-alpha.appspot.com",
  messagingSenderId: "211771066927",
  appId: "1:211771066927:web:dff22a8dc649fbee3b14da",
  measurementId: "G-D225XQHZSY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
