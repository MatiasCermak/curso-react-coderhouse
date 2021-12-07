// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOw7naodsRZruhJl5C3UZEcsPmMbJfQfI",
    authDomain: "curso-react-coderhouse-4fe1a.firebaseapp.com",
    projectId: "curso-react-coderhouse-4fe1a",
    storageBucket: "curso-react-coderhouse-4fe1a.appspot.com",
    messagingSenderId: "344017005469",
    appId: "1:344017005469:web:76d94524421d5a67119d74",
    measurementId: "G-EM5L3Z7SKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
