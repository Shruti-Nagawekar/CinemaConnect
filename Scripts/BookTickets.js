// Import Firestore functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your Firebase configuration
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

document.addEventListener('DOMContentLoaded', () => {
    // Function to get the time and date for a movie
    async function fetchShowtimesForMovie(movieId, theaterId) {
        const showtimesMap = {}; // Object to store times for each date

        try {
            // Fetch showtimes for the specified theater and movie ID
            const showtimesRef = collection(db, `theaters/${theaterId}/showtimes`);
            const showtimesQuery = query(showtimesRef, where("movieId", "==", movieId));
            const showtimesForMovieSnapshot = await getDocs(showtimesQuery);

            // Loop through the showtimes and store them in the map
            showtimesForMovieSnapshot.docs.forEach((doc) => {
                const showtimeData = doc.data();
                const date = showtimeData.date;
                const time = showtimeData.time;
                const screen = showtimeData.screen; // Get the screen information

                // Initialize the array for this date if it doesn't exist
                if (!showtimesMap[date]) {
                    showtimesMap[date] = [];
                }
                showtimesMap[date].push({ time, screen }); // Store both time and screen
            });
        } catch (error) {
            console.error("Error fetching showtimes for movie ID:", movieId, error);
        }

        // Generating Dates
        const dateList = document.getElementById('date-list');
        dateList.innerHTML = ''; // Clear previous dates

        // Sort dates and showing dates in the webpage
        const sortedDates = Object.keys(showtimesMap).sort((a, b) => new Date(a) - new Date(b));

        sortedDates.forEach(date => {
            // Sort times for the current date
            const sortedTimes = showtimesMap[date].sort((a, b) => a.time.localeCompare(b.time)); // Sort times lexicographically

            // Create a date item
            const dateItem = document.createElement('div');
            dateItem.classList.add('date-item');
            dateItem.textContent = new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

            // Add click event to handle selection
            dateItem.addEventListener('click', () => {
                document.querySelectorAll('.date-item').forEach(item => item.classList.remove('active'));
                dateItem.classList.add('active');

                // Update times based on the selected date
                updateTimeList(sortedTimes);
            });

            // Append the date item to the date list
            dateList.appendChild(dateItem);
        });
    }

    // Function to update the time list based on selected date
    function updateTimeList(times) {
        const timeList = document.getElementById('time-list');
        timeList.innerHTML = ''; // Clear previous times

        // Sort times before displaying
        times.sort((a, b) => a.time.localeCompare(b.time)); // Sort times lexicographically

        // Showing times in the webpage
        times.forEach(({ time, screen }) => {
            const timeItem = document.createElement('div');
            timeItem.classList.add('time-item');
            timeItem.textContent = `${time}`; // Display time

            // Add click event to handle selection
            timeItem.addEventListener('click', () => {
                document.querySelectorAll('.time-item').forEach(item => item.classList.remove('active'));
                timeItem.classList.add('active');

                // Store the selected screen in local storage for later use
                localStorage.setItem('screenNum', screen);
            });

            timeList.appendChild(timeItem);
        });
    }

    // Event listener for theater selection
    document.getElementById('theatreSelect').addEventListener('change', (event) => {
        const selectedTheater = event.target.value;
        const movieId = "ZZWLsvq2YA951jLgvRon"; // Replace with the actual movie ID

        if (selectedTheater) {
            fetchShowtimesForMovie(movieId, selectedTheater).then(() => {
                console.log("Showtimes fetched successfully for theater:", selectedTheater);
            }).catch(error => {
                console.error("Error fetching showtimes:", error);
            });
        }
    });

    // Initial fetch for the default theater if needed
    const defaultTheater = document.getElementById('theatreSelect').value;
    if (defaultTheater) {
        fetchShowtimesForMovie("ZZWLsvq2YA951jLgvRon", defaultTheater);
    }

    // Function to handle booking
    async function handleBooking() {
        const theaterSelect = document.getElementById('theatreSelect');
        const selectedTheater = theaterSelect.value;

        const selectedDate = document.querySelector('.date-item.active')?.textContent;
        const selectedTime = document.querySelector('.time-item.active')?.textContent;
        const screenNum = localStorage.getItem('screenNum'); // Ensure correct key is used
        console.log("Screen num:", screenNum);
        const ticketCount = parseInt(document.getElementById('counterInput').value);

        // Retrieve movie details from local storage
        const movieDetails = JSON.parse(localStorage.getItem('movieDetails'));
        const movieId = movieDetails.movieId;
        console.log("Movie Id: ", movieId);

        const userId = "user1"; // Hardcoded user ID REMOVE THIS AND ADD CORRECT
        const totalPrice = ticketCount * 10; // Assuming each ticket costs $10

        if (!selectedTheater || !selectedDate || !selectedTime) {
            alert("Please select a theater, date, and time.");
            return;
        }

        try {
            const bookingRef = await addDoc(collection(db, "bookings"), {
                movieId: movieId,
                showtimes: {
                    theater: selectedTheater,
                    date: selectedDate,
                    time: selectedTime
                },
                ticketId: `ticket_${Date.now()}`, // Unique ticket ID
                totalPrice: totalPrice,
                userId: userId,
                paymentStatus: false,   //WRITE A FUNCTION FOR THIS WHEN DOING PAYMENT
            });
            console.log("Booking successful with ID: ", bookingRef.id);
            alert("Booking successful!");

            // Store booking details in local storage
            localStorage.setItem('bookingDetails', JSON.stringify({
                confirmationNumber: bookingRef.id,
                movieId: movieId,
                theater: selectedTheater,
                date: selectedDate,
                time: selectedTime,
                ticketCount: ticketCount,
                totalPrice: totalPrice,
                userId: userId, //Change this
                screen: screenNum,
            }));

            // Redirect to confirmation page
            window.location.href = 'ShoppingCart.html';

        } catch (error) {
            console.error("Error adding booking: ", error);
            alert("Error adding booking. Please try again.");
        }
    }

    // Select number of tickets
    const counterInput = document.getElementById('counterInput');
    const decrementBtn = document.getElementById('decrement');
    const incrementBtn = document.getElementById('increment');

    decrementBtn.addEventListener('click', () => {
        if (counterInput.value > 1) {
            counterInput.value = parseInt(counterInput.value) - 1;
        }
    });

    incrementBtn.addEventListener('click', () => {
        if (counterInput.value < 10) {
            counterInput.value = parseInt(counterInput.value) + 1;
        }
    });

    counterInput.addEventListener('change', () => {
        let value = parseInt(counterInput.value);
        if (isNaN(value) || value < 1) {
            counterInput.value = 1;
        } else if (value > 10) {
            counterInput.value = 10;
        }
    });

    // Event listener for the booking button
    document.querySelector('.book-ticket-button').addEventListener('click', handleBooking);
});