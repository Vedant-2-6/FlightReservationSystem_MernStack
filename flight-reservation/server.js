const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

// Load environment variables
dotenv.config();

// Use environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/flightReservationDB';

// Middleware
app.use(express.json()); // For parsing JSON bodies

// // Import routes
const airportRoutes = require('./backend/routes/airportRoutes');
const bookingRoutes = require('./backend/routes/bookingRoutes');
const flightRoutes = require('./backend/routes/flightRoutes');
const paymentRoutes = require('./backend/routes/paymentRoutes');
const seatRoutes = require('./backend/routes/seatRoutes');
const userRoutes = require('./backend/routes/userRoutes');


// Basic route
app.get('/', (req, res) => {
    res.send('Flight reservation server is running!');
});


// Use routes
app.use('/api/airports', airportRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/seats', seatRoutes);
app.use('/api/users', userRoutes);


// Connect to MongoDB (without deprecated options)
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
