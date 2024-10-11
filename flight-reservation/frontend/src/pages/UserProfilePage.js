import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Star, Bell, Plane } from 'lucide-react';

const UserProfilePage = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    loyaltyPoints: 5000,
    preferences: {
      seatPreference: 'Window',
      mealPreference: 'Vegetarian',
    },
    savedRoutes: [
      { from: 'New York', to: 'London' },
      { from: 'Paris', to: 'Tokyo' },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Implement save logic here
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-sky-800">My Profile</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-700 transition duration-300"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <User className="text-sky-600 mr-2" size={20} />
                {isEditing ? (
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                  />
                ) : (
                  <span>{user.name}</span>
                )}
              </div>
              <div className="flex items-center">
                <Mail className="text-sky-600 mr-2" size={20} />
                {isEditing ? (
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                  />
                ) : (
                  <span>{user.email}</span>
                )}
              </div>
              <div className="flex items-center">
                <Phone className="text-sky-600 mr-2" size={20} />
                {isEditing ? (
                  <input
                    type="tel"
                    value={user.phone}
                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                  />
                ) : (
                  <span>{user.phone}</span>
                )}
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Seat Preference</label>
                {isEditing ? (
                  <select
                    value={user.preferences.seatPreference}
                    onChange={(e) => setUser({
                      ...user,
                      preferences: { ...user.preferences, seatPreference: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                  >
                    <option value="Window">Window</option>
                    <option value="Aisle">Aisle</option>
                    <option value="Middle">Middle</option>
                  </select>
                ) : (
                  <span>{user.preferences.seatPreference}</span>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Meal Preference</label>
                {isEditing ? (
                  <select
                    value={user.preferences.mealPreference}
                    onChange={(e) => setUser({
                      ...user,
                      preferences: { ...user.preferences, mealPreference: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                  >
                    <option value="Regular">Regular</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Kosher">Kosher</option>
                    <option value="Halal">Halal</option>
                  </select>
                ) : (
                  <span>{user.preferences.mealPreference}</span>
                )}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Loyalty Program</h2>
            <div className="bg-gradient-to-r from-sky-400 to-sky-600 rounded-lg p-6 text-white mb-8">
              <div className="flex items-center mb-4">
                <Star className="mr-2" size={24} />
                <span className="text-2xl font-semibold">Skyward Miles</span>
              </div>
              <p className="text-4xl font-bold mb-2">{user.loyaltyPoints.toLocaleString()}</p>
              <p>Points available</p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Saved Routes</h2>
            <div className="space-y-4">
              {user.savedRoutes.map((route, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center">
                    <Plane className="text-sky-600 mr-2" size={20} />
                    <span>{route.from} to {route.to}</span>
                  </div>
                  <Bell className="text-sky-600 cursor-pointer" size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
            >
              Save Changes
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default UserProfilePage;