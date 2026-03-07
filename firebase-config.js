// ==================== FIREBASE CONFIGURATION ====================

const firebaseConfig = {
  apiKey: "AIzaSyAmeK90ODc9c7YtzZfugezsf0IeQcHunH8",
  authDomain: "athletepro-613c1.firebaseapp.com",
  projectId: "athletepro-613c1",
  storageBucket: "athletepro-613c1.firebasestorage.app",
  messagingSenderId: "341892911291",
  appId: "1:341892911291:web:bef061f20110b9a1f4599e"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
