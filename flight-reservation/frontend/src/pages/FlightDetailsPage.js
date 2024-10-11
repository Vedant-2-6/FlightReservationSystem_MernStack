import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Luggage, Coffee, Wifi, DollarSign, Clock, Calendar } from 'lucide-react';

const FlightDetailsPage = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [extras, setExtras] = useState({
    meal: false,
    extraBaggage: false,
  });

  // Mock flight data
  const flight = {
    airline: 'Statham Air',
    flightNumber: 'SA123',
    from: 'New York (JFK)',
    to: 'London (LHR)',
    departure: '2023-07-15 10:00 AM',
    arrival: '2023-07-15 10:00 PM',
    duration: '7h 30m',
    price: 450,
    baggage: '1 carry-on, 1 checked bag',
    amenities: ['In-flight entertainment', 'Wi-Fi', 'Power outlets'],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold text-sky-800 mb-6">Flight Details</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">{flight.airline} - {flight.flightNumber}</h2>
            <p className="text-xl mb-2">{flight.from} to {flight.to}</p>
            <div className="flex items-center text-gray-600 mb-2">
              <Calendar className="mr-2" size={18} />
              <span>{flight.departure}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <Clock className="mr-2" size={18} />
              <span>{flight.duration}</span>
            </div>
            <div className="flex items-center text-2xl font-bold text-sky-600">
              <DollarSign className="mr-2" size={24} />
              <span>{flight.price}</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Amenities</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><Luggage className="mr-2" size={18} /> {flight.baggage}</li>
              {flight.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center">
                  {amenity.includes('Wi-Fi') ? <Wifi className="mr-2" size={18} /> : <Coffee className="mr-2" size={18} />}
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Select Your Seat</h3>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(30)].map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded ${
                  selectedSeat === index ? 'bg-sky-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => setSelectedSeat(index)}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Extras</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={extras.meal}
                onChange={(e) => setExtras({ ...extras, meal: e.target.checked })}
                className="mr-2"
              />
              Add meal ($15)
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={extras.extraBaggage}
                onChange={(e) => setExtras({ ...extras, extraBaggage: e.target.checked })}
                className="mr-2"
              />
              Extra baggage ($30)
            </label>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <button className="bg-gray-200 text-gray-800 py-2 px-6 rounded hover:bg-gray-300 transition duration-300">
            Back to Search
          </button>
          <button className="bg-sky-600 text-white py-2 px-6 rounded hover:bg-sky-700 transition duration-300">
            Book Now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FlightDetailsPage;