import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4YZbiA4gGYuzcpXBRvIzvVNQU0yUFDkw",
  authDomain: "vehr-proto.firebaseapp.com",
  projectId: "vehr-proto",
  storageBucket: "vehr-proto.firebasestorage.app",
  messagingSenderId: "686258743390",
  appId: "1:686258743390:web:6748b873ec10ac4622accf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);