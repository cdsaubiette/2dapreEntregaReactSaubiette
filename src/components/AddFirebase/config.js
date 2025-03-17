// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv5rof4UTicmUaz1JXcr2KjnajQlsHxoU",
  authDomain: "frontendstore-baca3.firebaseapp.com",
  projectId: "frontendstore-baca3",
  storageBucket: "frontendstore-baca3.firebasestorage.app",
  messagingSenderId: "758028041972",
  appId: "1:758028041972:web:1537f7eb78e0213aee68a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

