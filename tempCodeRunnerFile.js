
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
//import { getFirestore, doc, setDoc, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';
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

// Initialize Firestore
const db = getFirestore(app);


// Add a new document in collection "cities"
await setDoc(doc(db, "theaters", "Amarillo"), {

})

// db.collection("theaters").doc("Amarillo").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })
//     .then(() => {
//         console.log("Document successfully written!");
//     })
//     .catch((error) => {
//         console.error("Error writing document: ", error);
//     });
// db.collection("theaters").doc("Levelland").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })
//     .then(() => {
//         console.log("Document successfully written!");
//     })
//     .catch((error) => {
//         console.error("Error writing document: ", error);
//     });
// db.collection("theaters").doc("Plainview").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })
//     .then(() => {
//         console.log("Document successfully written!");
//     })
//     .catch((error) => {
//         console.error("Error writing document: ", error);
//     });
// db.collection("theaters").doc("Snyder").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })
//     .then(() => {
//         console.log("Document successfully written!");
//     })
//     .catch((error) => {
//         console.error("Error writing document: ", error);
//     });
// db.collection("theaters").doc("Abilene").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })
//     .then(() => {
//         console.log("Document successfully written!");
//     })
//     .catch((error) => {
//         console.error("Error writing document: ", error);
//     });

export { db, collection, addDoc, getDocs };


/* 
Add this to <head> of any file that uses firebase

 <script type="module" src="firebase.js"></script>

 */
