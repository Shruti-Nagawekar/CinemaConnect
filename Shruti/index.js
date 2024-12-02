require("dotenv").config(); // Load environment variables from key.env


// Initialize Stripe
require("dotenv").config({
  // eslint-disable-next-line max-len
  path: "C:/Users/shruti/OneDrive - Texas Tech University/Desktop/Project/CinemaConnect/CinemaConnect/shruti/functions/key.env",
});
// Replace with the correct path to your key.env file
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


require("dotenv").config(); // Load environment variables from .env file
console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY); // Check if the key is loaded

const functions = require("firebase-functions");

// Initiate Payment
exports.initiatePayment = functions.https.onRequest(async (req, res) => {
  try {
    const {amount, currency} = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount in cents
      currency, // e.g., "usd"
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
      message: "Payment initiated successfully",
    });
  } catch (error) {
    console.error("Error initiating payment:", error);
    res.status(500).send({error: "Failed to initiate payment"});
  }
});

// Verify Payment
exports.verifyPayment = functions.https.onRequest(async (req, res) => {
  try {
    const {paymentIntentId} = req.body;

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status === "succeeded") {
      res.status(200).send({
        status: paymentIntent.status,
        message: "Payment verified successfully",
      });
    } else {
      res.status(400).send({
        status: paymentIntent.status,
        message: "Payment not successful",
      });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).send({error: "Failed to verify payment"});
  }
});
