const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true }, // References the Booking model
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['credit_card', 'paypal', 'bank_transfer'], required: true },
    paymentDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' }
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
