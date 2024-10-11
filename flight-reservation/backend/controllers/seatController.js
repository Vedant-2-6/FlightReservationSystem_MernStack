const Seat = require('../models/Seat');
const Flight = require('../models/Flight');

// Get all seats for a flight
const getSeatsByFlight = async (req, res) => {
    try {
        const seats = await Seat.find({ flight: req.params.flightId });
        res.json(seats);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching seats' });
    }
};

// Add a new seat to a flight
const addSeat = async (req, res) => {
    const { flightId, seatNumber, classType } = req.body;
    try {
        const flight = await Flight.findById(flightId);
        if (!flight) return res.status(404).json({ message: 'Flight not found' });

        const newSeat = new Seat({ flight: flightId, seatNumber, class: classType });
        await newSeat.save();
        res.status(201).json(newSeat);
    } catch (err) {
        res.status(500).json({ message: 'Error adding seat' });
    }
};

// Update seat booking status
const updateSeatStatus = async (req, res) => {
    try {
        const seat = await Seat.findById(req.params.seatId);
        if (!seat) return res.status(404).json({ message: 'Seat not found' });

        seat.isBooked = req.body.isBooked;
        await seat.save();
        res.json(seat);
    } catch (err) {
        res.status(500).json({ message: 'Error updating seat status' });
    }
};

module.exports = { getSeatsByFlight, addSeat, updateSeatStatus };
