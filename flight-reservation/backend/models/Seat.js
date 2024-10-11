const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
    flight: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true }, // References the Flight model
    seatNumber: { type: String, required: true }, // e.g., "12A", "14C"
    isBooked: { type: Boolean, default: false },  // Status to check if the seat is already booked
    class: { type: String, enum: ['economy', 'business', 'first'], required: true }  // Seat class
});

const Seat = mongoose.model('Seat', seatSchema);
module.exports = Seat;
