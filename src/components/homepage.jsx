// src/MyPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaSearch, FaFileAlt, FaBriefcase } from 'react-icons/fa'; // Import icons
import { FaSalesforce, FaRegFileAlt, FaCode, FaVideo, FaPaintBrush, FaBullhorn, FaEdit, FaGlobe } from 'react-icons/fa';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import stepsBg from '../assets/assets/steps-bg.png'; // Background image
import heroimage from '../assets/assets/job.png'; // Hero image
import icon from '../assets/assets/steps-bg.png'; // Icon image for tagline
import jobIcon from '../assets/assets/steps-bg.png'; // Job icon

const MyPage = () => {
  const digitalSkills = [
    { title: 'Sales', description: 'Master the art of selling and customer relations.', icon: <FaSalesforce className="text-white" /> },
    { title: 'Administration', description: 'Efficiently manage tasks and support operations.', icon: <FaRegFileAlt className="text-white" /> },
    { title: 'Programming', description: 'Create applications and software solutions.', icon: <FaCode className="text-white" /> },
    { title: 'Videography', description: 'Capture and edit engaging videos.', icon: <FaVideo className="text-white" /> },
    { title: 'Graphic Design', description: 'Design visually appealing graphics and materials.', icon: <FaPaintBrush className="text-white" /> },
    { title: 'Digital Marketing', description: 'Promote products and services online effectively.', icon: <FaBullhorn className="text-white" /> },
    { title: 'Content Creation', description: 'Produce compelling content for various platforms.', icon: <FaEdit className="text-white" /> },
    { title: 'Web Development', description: 'Build and maintain functional websites.', icon: <FaGlobe className="text-white" /> },
  ];



  const bgColors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
  ];


  
  const stepsData = [
    {
      title: 'Prepare Your Resume',
      description: 'Craft a compelling resume that highlights your skills and experiences.',
      colorClass: 'bg-orange-100 text-orange-500',
      icon: <FaUser className="w-12 h-12 text-orange-500" />, // Person icon
    },
    {
      title: 'Research the Company',
      description: 'Understand the company culture and job requirements to tailor your application.',
      colorClass: 'bg-purple-100 text-purple-600',
      icon: <FaSearch className="w-12 h-12 text-purple-600" />, // Search glass icon
    },
    {
      title: 'Submit Your Application',
      description: 'Follow the application instructions carefully to ensure your submission is complete.',
      colorClass: 'bg-green-100 text-green-600',
      icon: <FaFileAlt className="w-12 h-12 text-green-600" />, // Resume icon
    },
    {
      title: 'Prepare for Interviews',
      description: 'Practice common interview questions and research the role to impress your interviewer.',
      colorClass: 'bg-red-100 text-red-600',
      icon: <FaBriefcase className="w-12 h-12 text-red-600" />, // Job icon
    },
  ];

  return (
    <div className="font-poppins">
      {/* Navigation */}
      <Navbar />
      <header className="relative text-center py-16 bg-purple-50">
        <div className="mx-4 md:mx-40 mt-20 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2">
            <motion.h2
              className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-4 text-orange-500 bg-orange-100 rounded-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={icon} alt="icon" className="w-6 h-6" />
              Find Your Dream Job Today!
            </motion.h2>

            <motion.h1
              className="mb-4 text-5xl font-bold text-gray-900"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Discover Your Perfect <span className="text-purple-600">Career</span> Match
            </motion.h1>

            <motion.p
              className="mb-8 max-w-xl mx-auto text-gray-500 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Join thousands of professionals finding the perfect role tailored to their skills and aspirations. Whether you're looking to kick-start your career or advance in your field, our platform connects you with top companies across industries.
            </motion.p>

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

            {/* Statistics Section */}
            <section className="py-8 bg-slate-100 mt-8 mb-6">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Our Statistics</h2>
                <div className="grid grid-cols-1 bg-white sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-6 bg-white shadow-sm rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-purple-600">1000+</h3>
                    <p className="text-slate-700 font-bold">Clients</p>
                  </div>
                  <div className="p-6 bg-white shadow-sm rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-green-600">$50M</h3>
                    <p className="text-slate-700 font-bold">Transactions</p>
                  </div>
                  <div className="p-6 bg-white shadow-sm rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-blue-600">200+</h3>
                    <p className="text-slate-700 font-bold">Freelancers</p>
                  </div>
                  <div className="p-6 bg-white shadow-sm rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-red-600">150+</h3>
                    <p className="text-slate-700 font-bold">Jobs Posted</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="md:w-1/2">
            <img src={heroimage} alt="heroimage" className="w-full h-auto" />
          </div>
        </div>
      </header>

      <section
        className="bg-cover bg-center py-16"
        style={{ backgroundImage: `url(${stepsBg})` }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            How to Apply for a <span className='text-green-700'>Job</span>
          </h2>
          <p className='text-center w-1/2 text-md text-slate-500 my-10 mx-auto'>Analyze the job description carefully, highlighting your relevant skills and experiences to showcase how you meet or exceed the qualifications.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className={`p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-transform duration-500 transform hover:scale-103 relative`}
              >
                <span className={`mb-4 text-center rounded-full px-2 flex items-center justify-center py-2 w-10 h-10 text-xl ${step.colorClass}`}>
                  {step.icon}
                </span>
                <h4 className="mb-2 text-lg font-bold text-slate-800">{step.title}</h4>
                <p className="text-gray-500 text-md">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Countless Opportunities Waiting for You Worldwide</h1>
        <p className="text-lg mb-12">Explore various digital skills that can open new doors for you.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitalSkills.map((skill, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg transition-transform duration-500 transform hover:scale-105 flex flex-col items-center">
              <span className={`flex items-center justify-center mb-4 p-4 rounded-full ${bgColors[index % bgColors.length]}`}>
                {skill.icon}
              </span>
              <h4 className="mb-2 text-lg font-bold text-gray-900">{skill.title}</h4>
              <p className="text-gray-500">{skill.description}</p>
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
