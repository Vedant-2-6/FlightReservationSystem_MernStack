const Booking = require('../models/Booking');
const Flight = require('../models/Flight');
const Seat = require('../models/Seat');

// Get all bookings
const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('flight').populate('seat').populate('user');
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching bookings' });
    }
};

// Create a new booking
const createBooking = async (req, res) => {
    const { flightId, userId, seatId } = req.body;

    try {
        const flight = await Flight.findById(flightId);
        if (!flight) return res.status(404).json({ message: 'Flight not found' });

        const seat = await Seat.findById(seatId);
        if (!seat || seat.isBooked) return res.status(400).json({ message: 'Seat not available' });

        seat.isBooked = true;
        await seat.save();

        const newBooking = new Booking({ flight: flightId, user: userId, seat: seatId });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(500).json({ message: 'Error creating booking' });
    }
};

// Get a single booking
const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id).populate('flight').populate('seat').populate('user');
        if (!booking) return res.status(404).json({ message: 'Booking not found' });
        res.json(booking);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching booking' });
    }
};

// Cancel a booking
const cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ message: 'Booking not found' });

        booking.status = 'cancelled';
        await booking.save();
        res.json({ message: 'Booking cancelled' });
    } catch (err) {
        res.status(500).json({ message: 'Error cancelling booking' });
    }
};

module.exports = { getAllBookings, createBooking, getBookingById, cancelBooking };
