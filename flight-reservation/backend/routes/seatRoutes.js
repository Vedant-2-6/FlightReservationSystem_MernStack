const express = require('express');
const { getSeatsByFlight, addSeat, updateSeatStatus } = require('../controllers/seatController');
const router = express.Router();

// Get all seats for a specific flight
router.get('/flight/:flightId', getSeatsByFlight);

// Add a new seat to a flight
router.post('/', addSeat);

// Update the status of a seat (e.g., mark as booked)
router.put('/:seatId', updateSeatStatus);

module.exports = router;
