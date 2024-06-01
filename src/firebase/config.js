// firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEFCw5SbjU16DUPzYNEnbz1CPctr6e5UI",
  authDomain: "cook-book-54a84.firebaseapp.com",
  projectId: "cook-book-54a84",
  storageBucket: "cook-book-54a84.appspot.com",
  messagingSenderId: "39911644124",
  appId: "1:39911644124:web:03b03354b3060f19f28d19",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const provider = new GoogleAuthProvider();

export { auth, provider ,db};
