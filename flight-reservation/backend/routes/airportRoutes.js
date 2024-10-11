const express = require('express');
const { getAllAirports, addAirport, getAirportById } = require('../controllers/airportController');
const router = express.Router();

// Get all airports
router.get('/', getAllAirports);

// Add a new airport
router.post('/', addAirport);

// Get a specific airport by ID
router.get('/:id', getAirportById);

module.exports = router;
