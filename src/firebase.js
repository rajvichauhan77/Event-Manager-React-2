import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6dONKGguxkj6qb8-Goh3LdoVmqsW0r5o",
  authDomain: "event-manager-631dd.firebaseapp.com",
  projectId: "event-manager-631dd",
  storageBucket: "event-manager-631dd.firebasestorage.app",
  messagingSenderId: "564886976107",
  appId: "1:564886976107:web:f2b78aade423b6b80de32e",
  measurementId: "G-2C8VM8NK8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { db };