const Payment = require('../models/Payment');
const Booking = require('../models/Booking');

// Get all payments
const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find().populate('booking');
        res.json(payments);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching payments' });
    }
};

// Process a new payment
const processPayment = async (req, res) => {
    const { bookingId, amount, paymentMethod } = req.body;

    try {
        const booking = await Booking.findById(bookingId);
        if (!booking) return res.status(404).json({ message: 'Booking not found' });

        const newPayment = new Payment({ booking: bookingId, amount, paymentMethod, status: 'completed' });
        await newPayment.save();
        res.status(201).json(newPayment);
    } catch (err) {
        res.status(500).json({ message: 'Error processing payment' });
    }
};

// Get a single payment
const getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id).populate('booking');
        if (!payment) return res.status(404).json({ message: 'Payment not found' });
        res.json(payment);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching payment' });
    }
};

module.exports = { getAllPayments, processPayment, getPaymentById };
