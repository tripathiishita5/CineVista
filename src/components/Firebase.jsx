// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJJs-BZXz0bsQUrphf-mGc0h8zv3-eLnU",
  authDomain: "cinevista-3c33b.firebaseapp.com",
  projectId: "cinevista-3c33b",
  storageBucket: "cinevista-3c33b.appspot.com",
  messagingSenderId: "156070585330",
  appId: "1:156070585330:web:771747300b9429efea016b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;