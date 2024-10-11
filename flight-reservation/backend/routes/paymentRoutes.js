const express = require('express');
const { getAllPayments, processPayment, getPaymentById } = require('../controllers/paymentController');
const router = express.Router();

// Get all payments
router.get('/', getAllPayments);

// Process a new payment
router.post('/', processPayment);

// Get a specific payment by ID
router.get('/:id', getPaymentById);

module.exports = router;
