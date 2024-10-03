// src/MyPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import stepsBg from '../assets/assets/steps-bg.png'; // Background image
import icon from '../assets/assets/steps-bg.png'; // Icon image for tagline
import jobIcon from '../assets/assets/steps-bg.png'; // Job icon

const MyPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-poppins">
      {/* Navigation */}
          <Navbar/>
      {/* Header Section */}
      <header className="relative text-center py-16 bg-purple-50">
      {/* Tagline Section with Fade Animation */}
      <motion.h2
        className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-4 text-orange-500 bg-orange-100 rounded-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={icon} alt="icon" className="w-6 h-6" />
        Find Your Dream Job Today!
      </motion.h2>

      {/* Main Title with Slide-In Animation */}
      <motion.h1
        className="mb-4 text-5xl font-bold text-gray-900"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Discover Your Perfect <span className="text-purple-600">Career</span> Match
      </motion.h1>

      {/* Description Section with Fade Animation */}
      <motion.p
        className="mb-8 max-w-xl mx-auto text-gray-500 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Join thousands of professionals finding the perfect role tailored to their skills and aspirations. Whether you're looking to kick-start your career or advance in your field, our platform connects you with top companies across industries.
      </motion.p>

      {/* Call to Action Buttons with Bounce Animation */}
      <motion.div
        className="flex justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1, 1.05, 1] }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/post-job">
          <button className="px-8 py-3 font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition duration-300">
            Post a Job
          </button>
        </Link>
        <Link to="/find-job">
          <button className="px-8 py-3 font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300">
            Find a Job
          </button>
        </Link>
      </motion.div>
    </header>

      {/* Steps Section */}
      <section className="bg-cover bg-center py-16" style={{ backgroundImage: `url(${stepsBg})` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="p-4 bg-white shadow-lg rounded-lg transition-transform duration-500 transform hover:scale-105">
                <span className={`block mb-4 px-3 py-2 rounded-full text-2xl ${['bg-orange-100 text-orange-500', 'bg-purple-100 text-purple-600', 'bg-green-100 text-green-600', 'bg-red-100 text-red-600'][index]}`}>
                  {index + 1}
                </span>
                <h4 className="mb-2 text-lg font-bold text-gray-900">Step {index + 1}</h4>
                <p className="text-gray-500">Description of step {index + 1} to guide users through the process.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="p-4 bg-white shadow-md rounded-lg transition-transform duration-500 transform hover:scale-105">
                <span className="block mb-4 px-3 py-2 bg-red-100 text-red-500 rounded-lg text-2xl">Icon</span>
                <h4 className="mb-2 text-lg font-bold text-gray-900">Explore {index + 1}</h4>
                <p className="text-gray-500">Description for Explore section {index + 1}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="p-4 bg-white shadow-md rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img src={jobIcon} alt="Job" className="w-12 h-12 bg-white shadow-md rounded-full p-2" />
                  <div>
                    <h5 className="font-bold text-gray-900">Job Title {index + 1}</h5>
                    <h6 className="text-sm text-gray-500">Company Name {index + 1}</h6>
                  </div>
                </div>
                <h4 className="mb-2 text-lg font-bold text-gray-900">Position Name {index + 1}</h4>
                <p className="text-gray-500">Short description of the job opportunity.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPage;
