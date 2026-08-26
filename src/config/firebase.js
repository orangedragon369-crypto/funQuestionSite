// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv2VcNk-9WIYy9Jfuo1Ke-ejzojaCPhF8",
  authDomain: "funquestiondb.firebaseapp.com",
  projectId: "funquestiondb", 
  storageBucket: "funquestiondb.firebasestorage.app",
  messagingSenderId: "987161459239",
  appId: "1:987161459239:web:451120f2e1c7922f5bac02",
  measurementId: "G-G8V11123SV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;