// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, FieldValue } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXYaId578POot-6eSG7WRc0wUpoieIoMw",
  authDomain: "software-engineering-20.firebaseapp.com",
  projectId: "software-engineering-20",
  storageBucket: "software-engineering-20.appspot.com",
  messagingSenderId: "1015609124330",
  appId: "1:1015609124330:web:a4762631ec3204d6c8be93",
  measurementId: "G-3TD648V0XH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
