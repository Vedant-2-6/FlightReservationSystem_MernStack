const Airport = require('../models/Airport');

// Get all airports
const getAllAirports = async (req, res) => {
    try {
        const airports = await Airport.find();
        res.json({
            airport: airports});
    } catch (err) {
        res.status(500).json({ message: 'Error fetching airports' });
    }
};

// Add a new airport
const addAirport = async (req, res) => {
    const { code, name, city, country } = req.body;
    try {
        const newAirport = new Airport({ code, name, city, country });
        await newAirport.save();
        res.status(201).json(newAirport);
    } catch (err) {
        res.status(500).json({ message: 'Error adding airport' });
    }
};

// Get an airport by ID
const getAirportById = async (req, res) => {
    try {
        const airport = await Airport.findById(req.params.id);
        if (!airport) return res.status(404).json({ message: 'Airport not found' });
        res.json(airport);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching airport' });
    }
};

module.exports = { getAllAirports, addAirport, getAirportById };
