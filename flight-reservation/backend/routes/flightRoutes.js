const express = require('express');
const { getAllFlights, addFlight } = require('../controllers/flightController');
const router = express.Router();

// Get all flights
router.get('/', getAllFlights);

// Add a new flight
router.post('/', addFlight);

module.exports = router;
