import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, Clock, Plane, User, Download } from 'lucide-react';

const BookingConfirmationPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });

  // Mock booking details
  const booking = {
    flightNumber: 'SA123',
    from: 'New York (JFK)',
    to: 'London (LHR)',
    departure: '2023-07-15 10:00 AM',
    arrival: '2023-07-15 10:00 PM',
    duration: '7h 30m',
    passenger: 'John Doe',
    seat: '14A',
    price: 450,
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Implement payment processing logic here
    console.log('Processing payment:', { paymentMethod, cardDetails });
    // After successful payment, you would typically redirect to a confirmation page or update the UI
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold text-sky-800 mb-6">Booking Confirmation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Flight Details</h2>
            <div className="space-y-2">
              <p><span className="font-semibold">Flight:</span> {booking.flightNumber}</p>
              <p className="flex items-center">
                <Plane className="mr-2" size={18} />
                {booking.from} to {booking.to}
              </p>
              <p className="flex items-center">
                <Calendar className="mr-2" size={18} />
                {booking.departure}
              </p>
              <p className="flex items-center">
                <Clock className="mr-2" size={18} />
                {booking.duration}
              </p>
              <p className="flex items-center">
                <User className="mr-2" size={18} />
                {booking.passenger} - Seat {booking.seat}
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Payment</h2>
            <form onSubmit={handlePayment}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Payment Method</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="credit-card"
                      checked={paymentMethod === 'credit-card'}
                      onChange={() => setPaymentMethod('credit-card')}
                      className="mr-2"
                    />
                    Credit Card
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                      className="mr-2"
                    />
                    PayPal
                  </label>
                </div>
              </div>
              {paymentMethod === 'credit-card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="card-number">Card Number</label>
                    <input
                      type="text"
                      id="card-number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                      placeholder="1234 5678 9012 3456"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="card-name">Name on Card</label>
                    <input
                      type="text"
                      id="card-name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                      placeholder="John Doe"
                      value={cardDetails.name}
                      onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label className="block text-gray-700 mb-2" htmlFor="card-expiry">Expiry Date</label>
                      <input
                        type="text"
                        id="card-expiry"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                        placeholder="MM/YY"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-gray-700 mb-2" htmlFor="card-cvv">CVV</label>
                      <input
                        type="text"
                        id="card-cvv"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                        placeholder="123"
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition duration-300"
                >
                  Pay ${booking.price}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-2xl font-semibold mb-4">E-Ticket</h2>
          <p className="mb-4">Your e-ticket will be generated automatically after successful payment.</p>
          <button className="flex items-center text-sky-600 hover:text-sky-800">
            <Download className="mr-2" size={18} />
            Download E-Ticket (Available after payment)
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingConfirmationPage;