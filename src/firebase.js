// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxVgupXix4irtADSE5h8Pb1mI409FF3gI",
  authDomain: "rainbow-overseas-45052.firebaseapp.com",
  projectId: "rainbow-overseas-45052",
  storageBucket: "rainbow-overseas-45052.firebasestorage.app",
  messagingSenderId: "1049845771739",
  appId: "1:1049845771739:web:c9ce8b2dcf96d08d3b0bfe",
  measurementId: "G-5TRGNPF71Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
