const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    flight: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true }, // References the Flight model
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },    // References the User model
    seat: { type: mongoose.Schema.Types.ObjectId, ref: 'Seat', required: true },    // References the Seat model
    bookingDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['confirmed', 'cancelled'], default: 'confirmed' }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
