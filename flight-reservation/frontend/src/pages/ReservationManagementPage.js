import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plane, Calendar, Clock, AlertCircle, Edit2, X } from 'lucide-react';

const ReservationManagementPage = () => {
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);

  useEffect(() => {
    // Fetch reservations from API
    // This is a mock implementation
    setReservations([
      {
        id: 1,
        flightNumber: 'SA123',
        from: 'New York (JFK)',
        to: 'London (LHR)',
        departure: '2023-07-15 10:00 AM',
        status: 'On Time',
        canCancel: true,
        canModify: true,
      },
      {
        id: 2,
        flightNumber: 'SA456',
        from: 'London (LHR)',
        to: 'Paris (CDG)',
        departure: '2023-08-01 2:00 PM',
        status: 'Delayed',
        canCancel: false,
        canModify: true,
      },
    ]);
  }, []);

  const handleCancel = (id) => {
    // Implement cancellation logic
    console.log('Cancelling reservation:', id);
  };

  const handleModify = (id) => {
    // Implement modification logic
    console.log('Modifying reservation:', id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold text-sky-800 mb-6">My Reservations</h1>
        
        <div className="space-y-6">
          {reservations.map((reservation) => (
            <motion.div
              key={reservation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-semibold">{reservation.flightNumber}</h2>
                  <p className="text-gray-600">{reservation.from} to {reservation.to}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  reservation.status === 'On Time' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                }`}>
                  {reservation.status}
                </div>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="mr-2" size={18} />
                <span>{reservation.departure}</span>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setSelectedReservation(reservation)}
                  className="text-sky-600 hover:text-sky-800"
                >
                  View Details
                </button>
                <div className="space-x-2">
                  {reservation.canModify && (
                    <button
                      onClick={() => handleModify(reservation.id)}
                      className="bg-sky-600 text-white py-1 px-3 rounded hover:bg-sky-700 transition duration-300"
                    >
                      Modify
                    </button>
                  )}
                  {reservation.canCancel && (
                    <button
                      onClick={() => handleCancel(reservation.id)}
                      className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-300"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedReservation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold">Reservation Details</h2>
                <button onClick={() => setSelectedReservation(null)} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-4">
                <p><span className="font-semibold">Flight:</span> {selectedReservation.flightNumber}</p>
                <p><span className="font-semibold">Route:</span> {selectedReservation.from} to {selectedReservation.to}</p>
                <p><span className="font-semibold">Departure:</span> {selectedReservation.departure}</p>
                <p><span className="font-semibold">Status:</span> {selectedReservation.status}</p>
                {/* Add more details as needed */}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ReservationManagementPage;