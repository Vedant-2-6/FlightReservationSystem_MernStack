const Flight = require('../models/Flight');

// Get all flights
const getAllFlights = async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving flights' });
    }
};

// Add a flight
const addFlight = async (req, res) => {
    try {
        const newFlight = new Flight(req.body);
        await newFlight.save();
        res.status(201).json(newFlight);
    } catch (err) {
        res.status(400).json({ message: 'Error adding flight' });
    }
};

module.exports = { getAllFlights, addFlight };
