import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plane, Calendar, Users, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-200">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-sky-700">Statham Airlines</div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-sky-600">Home</a>
              <a href="#" className="text-gray-800 hover:text-sky-600">Flights</a>
              <a href="#" className="text-gray-800 hover:text-sky-600">Deals</a>
              <a href="#" className="text-gray-800 hover:text-sky-600">Login</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-sky-800 mb-4">Fly with Confidence</h1>
          <p className="text-xl text-gray-600">Discover the world with Statham Airlines</p>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-xl p-6 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center border rounded p-2">
              <Plane className="text-sky-500 mr-2" />
              <input
                type="text"
                placeholder="From"
                className="w-full outline-none"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
            </div>
            <div className="flex items-center border rounded p-2">
              <Plane className="text-sky-500 mr-2" />
              <input
                type="text"
                placeholder="To"
                className="w-full outline-none"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="flex items-center border rounded p-2">
              <Calendar className="text-sky-500 mr-2" />
              <input
                type="date"
                className="w-full outline-none"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="flex items-center border rounded p-2">
              <Users className="text-sky-500 mr-2" />
              <input
                type="number"
                min="1"
                placeholder="Passengers"
                className="w-full outline-none"
                value={passengers}
                onChange={(e) => setPassengers(parseInt(e.target.value))}
              />
            </div>
          </div>
          <button className="mt-4 w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700 transition duration-300">
            Search Flights
          </button>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold text-sky-800 mb-6">Featured Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { destination: 'Paris', price: '$499' },
              { destination: 'Tokyo', price: '$799' },
              { destination: 'New York', price: '$399' },
            ].map((deal, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-gray-300"></div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{deal.destination}</h3>
                  <p className="text-gray-600">Starting from {deal.price}</p>
                  <button className="mt-4 flex items-center text-sky-600 hover:text-sky-800">
                    Book Now <ArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="bg-sky-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Statham Airlines</h3>
              <p>Your journey begins with us.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul>
                <li><a href="#" className="hover:text-sky-300">About Us</a></li>
                <li><a href="#" className="hover:text-sky-300">Contact</a></li>
                <li><a href="#" className="hover:text-sky-300">FAQs</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul>
                <li><a href="#" className="hover:text-sky-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-sky-300">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;