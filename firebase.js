
// Import the functions you need from the SDKs you need
//const { initializeApp } = require("firebase/app");
//const { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

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
const db = getFirestore(app);

// // Function to delete all showtimes for a specific theater and screen
// async function deleteShowtimes(theaterId) {
//     try {
//         const showtimesCollection = collection(db, `theaters/${theaterId}/showtimes`);
//         const showtimeDocs = await getDocs(showtimesCollection);

//         // Loop through each document and delete it
//         const deletePromises = showtimeDocs.docs.map(doc => deleteDoc(doc.ref));
//         await Promise.all(deletePromises);
//         console.log(`Deleted all showtimes for ${theaterId}.`);
//     } catch (error) {
//         console.error("Error deleting showtimes: ", error);
//     }
// }


// // Function to generate random showtimes with 2-hour gaps
// function generateShowtimes() {
//     return ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]; // Example times with 2-hour gaps
// }

// // Function to generate random screens with 2-hour gaps
// function generateScreens() {
//     return ["Screen 1", "Screen 2", "Screen 3", "Screen 4", "Screen 5"]; // Example times with 2-hour gaps
// }

// // Function to fetch all movie IDs from the "Movie" collection
// async function fetchMovieIds() {
//     try {
//         const moviesSnapshot = await getDocs(collection(db, "Movie")); // Match the exact collection name
//         return moviesSnapshot.docs.map((doc) => doc.id); // Extract movie IDs (document IDs)
//     } catch (error) {
//         console.error("Error fetching movie IDs: ", error);
//         return []; // Return an empty array if an error occurs
//     }
// }

// // Function to update showtimes for all screens in all theaters
// async function updateShowtimes() {
//     try {
//         // Fetch all movie IDs
//         const movieIds = await fetchMovieIds();

//         if (movieIds.length === 0) {
//             console.error("No movies found in the database. Cannot generate showtimes.");
//             return;
//         }

//         // Fetch all theaters from the database
//         const theatersSnapshot = await getDocs(collection(db, "theaters"));

//         // Loop through each theater
//         for (const theaterDoc of theatersSnapshot.docs) {
//             const theaterId = theaterDoc.id;

//             // Fetch all screens for the current theater
//             const screens = generateScreens();

//             // for (const screenDoc of screensSnapshot.docs) {
//             //     const screenId = screenDoc.id;

//             //     // Clear existing showtimes for the screen
//             await deleteShowtimes(theaterId);

//             // Add new showtimes for the next 10 days
//             for (let i = 0; i < 20; i++) {
//                 const date = new Date();
//                 date.setDate(date.getDate() + i); // Increment date by i days
//                 const formattedDate = date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD

//                 const showtimes = generateShowtimes(); // Generate showtimes for the day
//                 for (const time of showtimes) {
//                     const randomMovieId = movieIds[Math.floor(Math.random() * movieIds.length)]; // Pick a random movie ID
//                     const randomScreen = screens[Math.floor(Math.random() * screens.length)]; // Pick a random movie ID

//                     try {
//                         await addDoc(collection(db, `theaters/${theaterId}/showtimes`), {
//                             bookedSeats: 0, // Initial booked seats
//                             date: formattedDate,
//                             time: time,
//                             movieId: randomMovieId,
//                             screen: randomScreen,
//                         });
//                         console.log(`Added showtime: ${formattedDate} ${time} for ${theaterId} ${randomScreen} with movie ID ${randomMovieId}`);
//                     } catch (error) {
//                         console.error("Error adding showtime: ", error);
//                     }
//                 }
//             }
//         }
//     } catch (error) {
//         console.error("Error updating showtimes: ", error);
//     }
// }

// // Call the function to update showtimes
// updateShowtimes();

/*
Add this to <head> of any file that uses firebase

 <script type="module" src="firebase.js"></script>

 */
