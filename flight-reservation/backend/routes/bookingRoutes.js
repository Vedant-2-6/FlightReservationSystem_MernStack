const express = require('express');
const { getAllBookings, createBooking, getBookingById, cancelBooking } = require('../controllers/bookingController');
const router = express.Router();

// Get all bookings
router.get('/', getAllBookings);

// Create a new booking
router.post('/', createBooking);

// Get a specific booking by ID
router.get('/:id', getBookingById);

// Cancel a booking by ID
router.put('/:id/cancel', cancelBooking);

module.exports = router;
