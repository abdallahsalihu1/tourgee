// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxz-HuxqTAkZ9cYih8zTs8EcUSE00PvyI",
  authDomain: "tourgee-3657b.firebaseapp.com",
  projectId: "tourgee-3657b",
  storageBucket: "tourgee-3657b.firebasestorage.app",
  messagingSenderId: "926119987810",
  appId: "1:926119987810:web:668f0aa8f2a5c3328edf3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}