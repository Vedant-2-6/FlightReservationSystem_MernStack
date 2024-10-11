import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Plane, Calendar, DollarSign, Clock } from 'lucide-react';

const FlightSearchPage = () => {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1,
  });
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    directOnly: false,
    airlines: [],
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    // For demo purposes, we'll just set some mock results
    setSearchResults([
      { id: 1, airline: 'Statham Air', from: 'New York', to: 'London', price: 450, duration: '7h 30m', departure: '10:00 AM' },
      { id: 2, airline: 'SkyHigh', from: 'New York', to: 'London', price: 500, duration: '7h 45m', departure: '2:00 PM' },
      { id: 3, airline: 'AirSpeed', from: 'New York', to: 'London', price: 420, duration: '8h', departure: '6:00 PM' },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-200 p-6">
      <h1 className="text-4xl font-bold text-sky-800 mb-8">Find Your Flight</h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-6 mb-8"
      >
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center border rounded p-2">
            <Plane className="text-sky-500 mr-2" />
            <input
              type="text"
              placeholder="From"
              className="w-full outline-none"
              value={searchParams.from}
              onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
            />
          </div>
          <div className="flex items-center border rounded p-2">
            <Plane className="text-sky-500 mr-2" />
            <input
              type="text"
              placeholder="To"
              className="w-full outline-none"
              value={searchParams.to}
              onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
            />
          </div>
          <div className="flex items-center border rounded p-2">
            <Calendar className="text-sky-500 mr-2" />
            <input
              type="date"
              className="w-full outline-none"
              value={searchParams.date}
              onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
            />
          </div>
          <button type="submit" className="bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-700 transition duration-300 flex items-center justify-center">
            <Search className="mr-2" /> Search Flights
          </button>
        </form>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/4"
        >
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-sky-800 mb-4">Filters</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Price Range</label>
              <input
                type="range"
                min="0"
                max="1000"
                value={filters.priceRange[1]}
                onChange={(e) => setFilters({ ...filters, priceRange: [0, parseInt(e.target.value)] })}
                className="w-full"
              />
              <div className="flex justify-between">
                <span>$0</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.directOnly}
                  onChange={(e) => setFilters({ ...filters, directOnly: e.target.checked })}
                  className="mr-2"
                />
                Direct flights only
              </label>
            </div>
            {/* Add more filter options here */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-3/4"
        >
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-sky-800 mb-4">Search Results</h2>
            {searchResults.map((flight) => (
              <motion.div
                key={flight.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="border-b border-gray-200 py-4 last:border-b-0"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{flight.airline}</h3>
                    <p className="text-gray-600">{flight.from} to {flight.to}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-sky-600">${flight.price}</p>
                    <button className="mt-2 bg-sky-600 text-white py-1 px-4 rounded hover:bg-sky-700 transition duration-300">
                      Select
                    </button>
                  </div>
                </div>
                <div className="mt-2 flex justify-between text-gray-600">
                  <span className="flex items-center"><Clock className="mr-1" size={16} /> {flight.duration}</span>
                  <span className="flex items-center"><Calendar className="mr-1" size={16} /> {flight.departure}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlightSearchPage;