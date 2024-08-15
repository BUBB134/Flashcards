
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "flashcards-a2c6e.firebaseapp.com",
    projectId: "flashcards-a2c6e",
    storageBucket: "flashcards-a2c6e.appspot.com",
    messagingSenderId: "456664278136",
    appId: "1:456664278136:web:5688a1caca4ba56a3ab98d",
    measurementId: "G-6L0E26N99D"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;