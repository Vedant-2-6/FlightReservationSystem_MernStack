const mongoose = require('mongoose');

const airportSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true }
});

const Airport = mongoose.model('Airport', airportSchema);
module.exports = Airport;
