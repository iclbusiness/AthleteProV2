import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyAmeK90ODc9c7YtzZfugezsf0IeQcHunH8",
  authDomain: "athletepro-613c1.firebaseapp.com",
  projectId: "athletepro-613c1",
  storageBucket: "athletepro-613c1.firebasestorage.app",
  messagingSenderId: "341892911291",
  appId: "1:341892911291:web:bef061f20110b9a1f4599e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
