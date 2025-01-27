// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsN2_E76iLLIgirayOdkx3W2_IBVmxGMA",
  authDomain: "examen-programacionandresv.firebaseapp.com",
  projectId: "examen-programacionandresv",
  storageBucket: "examen-programacionandresv.firebasestorage.app",
  messagingSenderId: "800806784285",
  appId: "1:800806784285:web:9c66641598790c2111e5f4",
  measurementId: "G-E6XMW5GH98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };