import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "flashcards-3ffa8.firebaseapp.com",
  projectId: "flashcards-3ffa8",
  storageBucket: "flashcards-3ffa8.appspot.com",
  messagingSenderId: "397550940139",
  appId: "1:397550940139:web:c14a0f9c430988e4edf3ae",
  measurementId: "G-PXR9G8YL9Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

