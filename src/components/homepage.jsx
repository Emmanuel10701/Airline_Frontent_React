// src/MyPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Testimony from "../components/testimony"
import { FaUser, FaSearch, FaFileAlt, FaBriefcase } from 'react-icons/fa'; // Import icons
import { FaSalesforce, FaRegFileAlt, FaCode, FaVideo, FaPaintBrush, FaBullhorn, FaEdit, FaGlobe } from 'react-icons/fa';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import stepsBg from '../assets/assets/steps-bg.png'; // Background image
import heroimage from '../assets/assets/job.png'; // Hero image
import icon from '../assets/assets/steps-bg.png'; // Icon image for tagline
import jobIcon from '../assets/assets/steps-bg.png'; // Job icon

// jobs 

import figma from '../assets/assets/figma.png'; // Job icon
import amazon from '../assets/assets/amazon.png'; // Job icon
import microsoft from '../assets/assets/microsoft.png'; // Job icon
import linkedin from '../assets/assets/linkedin.png'; // Job icon
//offers
import Offer1 from '../assets/assets/offer-1.jpg'; // Job icon
import Offer2 from '../assets/assets/offer-2.jpg'; // Job icon
import Offer3 from '../assets/assets/offer-3.jpg'; // Job icon



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
      image: <FaUser className="w-12 h-12 text-orange-500" />, // Person image
    },
    {
      title: 'Research the Company',
      description: 'Understand the company culture and job requirements to tailor your application.',
      colorClass: 'bg-purple-100 text-purple-600',
      image: <FaSearch className="w-12 h-12 text-purple-600" />, // Search glass image
    },
    {
      title: 'Submit Your Application',
      description: 'Follow the application instructions carefully to ensure your submission is complete.',
      colorClass: 'bg-green-100 text-green-600',
      image: <FaFileAlt className="w-12 h-12 text-green-600" />, // Resume image
    },
    {
      title: 'Prepare for Interviews',
      description: 'Practice common interview questions and research the role to impress your interviewer.',
      colorClass: 'bg-red-100 text-red-600',
      image: <FaBriefcase className="w-12 h-12 text-red-600" />, // Job image
    },
  ];

  const Jobs = [
    {
      title: 'Frontent Developer',
      description: 'Craft a compelling resume that highlights your skills and experiences.',
      image: amazon, // Person image
    },
    {
      title: 'Figma Designer',
      description: 'Understand the company culture and job requirements to tailor your application.',
      image: figma, // Search glass image
    },
    {
      title: 'Full stack engineer',
      description: 'Follow the application instructions carefully to ensure your submission is complete.',
      image: linkedin, // Resume image
    },
    {
      title: 'Data Analyst',
      description: 'Practice common interview questions and research the role to impress your interviewer.',
      image: microsoft, // Job image
    },
  ];
  const Offers = [
    {
      id: '1',
      title: 'MentorShip',
      description: 'Craft a compelling resume that highlights your skills and experiences.',
      image: Offer1, // Person image
    },
    {
      id: '2',
      title: 'Connections',
      description: 'Understand the company culture and job requirements to tailor your application.',
      image: Offer2, // Search glass image
    },
    {
      id: '3',
      title: 'Get interview and Job ',
      description: 'Follow the application instructions carefully to ensure your submission is complete.',
      image: Offer3, // Resume image
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
            <section className="py-8 bg-slate-100 flex mt-8 ml-10 mb-6">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Our Statistics</h2>
                <div className="flex mr-10 flex-1 flex-wrap">
                  <div className="p-3 bg-white shadow-sm rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-purple-600">100k</h3>
                    <p className="text-slate-700 font-bold">Clients</p>
                  </div>
                  <div className="p-3 bg-white shadow-sm rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-green-600">$50M+</h3>
                    <p className="text-slate-700 font-bold">Transactions</p>
                  </div>
                  <div className="p-3 bg-white shadow-sm rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-blue-600">200k</h3>
                    <p className="text-slate-700 font-bold">Freelancers</p>
                  </div>
                  <div className="p-3 bg-white shadow-sm rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-red-600">150k</h3>
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
        className="bg-cover bg-center px-2 mx-4 md:px-12 py-16"
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
     <section className="py-16 mx-4 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
    <h1 className="md:text-4xl text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
      Countless Opportunities Waiting for You <span className='md:text-5xl text-3xl  text-orange-500'>Worldwide</span>
    </h1>
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
      <section className="py-16 mb-30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Expole those Opportunities And  Apply for those  <span className='text-slate-700'>Job</span>
          </h2>
          <p className='text-center w-1/2 text-md text-slate-500 font-semibold my-10 mx-auto'>Analyze the job description carefully, highlighting your relevant skills and experiences to showcase how you meet or exceed the qualifications.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Jobs.map((Jobs, index) => (
              <div
                key={index}
                className={`p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-transform duration-500 transform hover:scale-103 relative`}
              >

      <img src={Jobs.image} alt="jobs image" className='w-12 h-12 bg-slate-200  rounded-full px-2 py-2 ' />      
          <h4 className="mb-2 text-xl text-center font-bold text-slate-800">{Jobs.title}</h4>
                <p className="text-gray-500 text-mdb font-semibold">{Jobs.description}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="my-6 rounded-full bg-transparent text-slate-900 font-bold border flex items-center justify-center mx-auto focus:outline-emerald-700 px-6 py-3 border-blue-800 transition-transform transform hover:scale-102 hover:bg-blue-800 hover:text-white">
        <Link to="/jobslist" className="w-full h-full flex items-center justify-center">
          <span className="flex items-center justify-center w-full h-full">Explore More</span>
        </Link>
      </button>    
</section>



{/* offer Section */}
<section className="py-16 mb-30">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
      This is what we offer for you to get a <span className="text-slate-700">Job</span>
    </h2>
    <p className="text-center w-1/2 text-md text-slate-500 font-semibold my-10 mx-auto">
      Analyze the job description carefully, highlighting your relevant skills and experiences to showcase how you meet or exceed the qualifications.
    </p>

    <div className="flex flex-wrap justify-center gap-6">
      {Offers.map((offer, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-transform duration-500 transform hover:scale-103 w-full sm:w-1/2 lg:w-1/4"
        >
          <img
            src={offer.image}
            alt="Offer image"
            className="bg-slate-200 w-3/4 h-auto mb-4 rounded-md"
          />
          <div className="text-center">
            <h1 className="text-3xl text-green-700 mb-2">{index + 1}.</h1>
            <h4 className="mb-2 text-xl font-bold text-slate-800">{offer.title}</h4>
            <p className="text-gray-500 text-md font-semibold">{offer.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    <div className='mt-10 flex items-center justify-center'>
      <Testimony/>
    </div>
    </div>
  );
};

export default MyPage;
