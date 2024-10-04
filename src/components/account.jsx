// src/components/AccountSelection.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserTie, FaUserGraduate } from 'react-icons/fa'; // Importing icons from react-icons

const AccountSelection = () => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    // Store the selected role in local storage
    localStorage.setItem('userRole', role);
    // Redirect to login page
    navigate('/register');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Choose Your Account Type</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
        <div
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
          onClick={() => handleSelect('client')}
        >
          <FaUserTie className="text-5xl mb-4 text-blue-500" />
          <h2 className="text-2xl font-semibold mb-2">Client</h2>
          <p className="text-gray-600 text-center mb-4">
            Hire talented freelancers for your projects.
          </p>
          <button className="bg-transparent border border-blue-500 text-blue-500 rounded-full px-4 py-2 transition duration-300 hover:bg-blue-500 hover:text-white">
            Select Client
          </button>
        </div>
        <div
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
          onClick={() => handleSelect('freelancer')}
        >
          <FaUserGraduate className="text-5xl mb-4 text-green-500" />
          <h2 className="text-2xl font-semibold mb-2">Freelancer</h2>
          <p className="text-gray-600 text-center mb-4">
            Offer your skills and find freelance work.
          </p>
          <button className="bg-transparent border border-green-500 text-green-500 rounded-full px-4 py-2 transition duration-300 hover:bg-green-500 hover:text-white">
            Select Freelancer
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSelection;
