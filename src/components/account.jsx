import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserTie, FaUserGraduate } from 'react-icons/fa';

const AccountSelection = () => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    localStorage.setItem('userRole', role);
    navigate('/register');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600 text-center">
        Choose Your Account Type
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
        <div
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
          onClick={() => handleSelect('client')}
        >
          <FaUserTie className="text-4xl md:text-5xl mb-4 text-blue-500" />
          <h2 className="text-xl md:text-2xl font-semibold mb-2">👔 Client</h2>
          <p className="text-gray-600 text-center mb-4">
            Hire talented freelancers for your projects with ease and efficiency.
          </p>
          <button className="bg-transparent border border-blue-500 text-blue-500 rounded-full px-6 py-2 transition duration-300 hover:bg-blue-500 hover:text-white">
            Select Client
          </button>
        </div>
        <div
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
          onClick={() => handleSelect('freelancer')}
        >
          <FaUserGraduate className="text-4xl md:text-5xl mb-4 text-green-500" />
          <h2 className="text-xl md:text-2xl font-semibold mb-2">👩‍🎓 Freelancer</h2>
          <p className="text-gray-600 text-center mb-4">
            Showcase your skills and find rewarding freelance opportunities.
          </p>
          <button className="bg-transparent border border-green-500 text-green-500 rounded-full px-6 py-2 transition duration-300 hover:bg-green-500 hover:text-white">
            Select Freelancer
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSelection;
