//NODE.js / Next.js version...???
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";  // Import Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { db, storage };

{/* 
  JAVASCRIP VERSION

  <script type="module">
  // Import the functions you need from the SDKs you need
  import {initializeApp} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBzF9rQIiRhQTCPPTY93Fjvct8aDsJtHIM",
  authDomain: "movie-booking-system-119eb.firebaseapp.com",
  projectId: "movie-booking-system-119eb",
  storageBucket: "movie-booking-system-119eb.firebasestorage.app",
  messagingSenderId: "582758548972",
  appId: "1:582758548972:web:2088b20c9cb3f1a0b42cc9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script> */}