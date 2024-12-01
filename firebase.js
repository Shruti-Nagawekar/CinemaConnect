
// // Import the functions you need from the SDKs you need
// const { initializeApp } = require("firebase/app");
// const { getFirestore, collection, addDoc, getDocs, deleteDoc } = require("firebase/firestore");
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBzF9rQIiRhQTCPPTY93Fjvct8aDsJtHIM",
//     authDomain: "movie-booking-system-119eb.firebaseapp.com",
//     projectId: "movie-booking-system-119eb",
//     storageBucket: "movie-booking-system-119eb.firebasestorage.app",
//     messagingSenderId: "582758548972",
//     appId: "1:582758548972:web:2088b20c9cb3f1a0b42cc9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Function to delete all showtimes for a specific theater and screen
// async function deleteShowtimes(theaterId, screenId) {
//     try {
//         const showtimesCollection = collection(db, `theaters/${theaterId}/screens/${screenId}/showtimes`);
//         const showtimeDocs = await getDocs(showtimesCollection);

//         // Loop through each document and delete it
//         const deletePromises = showtimeDocs.docs.map(doc => deleteDoc(doc.ref));
//         await Promise.all(deletePromises);
//         console.log(`Deleted all showtimes for ${theaterId} ${screenId}.`);
//     } catch (error) {
//         console.error("Error deleting showtimes: ", error);
//     }
// }

// // Function to generate random showtimes with 2-hour gaps
// function generateShowtimes() {
//     return ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]; // Example times with 2-hour gaps
// }

// // Function to populate dummy data
// async function populateDummyData() {
//     const theaters = ["Lubbock", "Amarillo", "Levelland", "Plainview", "Snyder", "Abilene"];
//     const movieIds = ["movie_001", "movie_002", "movie_003", "movie_004", "movie_005", "movie_006", "movie_007", "movie_008"];

//     for (const theaterId of theaters) {
//         for (let screenIndex = 1; screenIndex <= 5; screenIndex++) { // Loop for 5 screens
//             const screenId = `screen${screenIndex}`;

//             // Clear existing showtimes
//             await deleteShowtimes(theaterId, screenId);

//             // Loop for 10 unique days of showtimes
//             for (let i = 0; i < 10; i++) {
//                 const date = new Date();
//                 date.setDate(date.getDate() + i); // Increment date by i days
//                 const formattedDate = date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

//                 const showtimes = generateShowtimes(); // Get the times for the current date

//                 for (const time of showtimes) {
//                     const randomMovieId = movieIds[Math.floor(Math.random() * movieIds.length)];
//                     const showtimeId = `showtime_${theaterId}_${screenId}_${i}_${time.replace(':', '-')}`; // Unique ID for each showtime

//                     try {
//                         await addDoc(collection(db, `theaters/${theaterId}/screens/${screenId}/showtimes`), {
//                             bookedSeats: 0, // Initial booked seats
//                             date: formattedDate,
//                             time: time,
//                             movieId: randomMovieId
//                         });
//                         console.log(`Added showtime: ${formattedDate} ${time} for ${theaterId} ${screenId}`);
//                     } catch (error) {
//                         console.error("Error adding showtime: ", error);
//                     }
//                 }
//             }
//         }
//     }
// }

// // Call the function to populate data
// populateDummyData();

// /*
// Add this to <head> of any file that uses firebase

//  <script type="module" src="firebase.js"></script>

//  */
