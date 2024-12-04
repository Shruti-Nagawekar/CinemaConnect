const express = require('express'); //framework we need
const app = express(); //instance of express application
const stripe = require('stripe')('sk_test_51QR139Hdf6qsLh9tK87rh9JhSAeX7oCyaAiXQPaGaGtj1N1VOMh6dC5gyEqm5rZuPdTYJh9N2bD7yyCrRYcEMwjV00nE4iRjeP'); // Replace with your actual Stripe secret key

app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
        });

        res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(5500, () => console.log('Server running on port 3000'));