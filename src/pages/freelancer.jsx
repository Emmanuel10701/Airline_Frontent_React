// FreelancerDashboard.js

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBriefcase, FaMoneyBillWave, FaUserFriends, FaBars, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import { CircularProgress } from '@mui/material';
import ProfileForm from '../components/profile'; // Import ProfileForm component
import ApplicationsList from '../components/applicationslist'; // Import ApplicationsList component
import { FaExclamationTriangle } from 'react-icons/fa';

const FreelancerDashboard = () => {
  const [activeTab, setActiveTab] = useState('applicationsList'); // Default to applications list
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [error, setError] = useState(null);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    totalIncome: 0,
    appliedJobs: [],
    clients: [],
  });

  const handleTabChange = (tab) => {
    setLoading(true);
    setActiveTab(tab);
    setTimeout(() => {
      setLoading(false);
      setSidebarOpen(false);
    }, 1000);
  };

  const handleProfileChange = (data) => {
    setProfileData(data);
    localStorage.setItem('freelancerProfile', JSON.stringify(data));
    toast.success("Profile updated successfully!");
  };

  useEffect(() => {
    // Load existing profile data from local storage if it exists
    const storedProfile = JSON.parse(localStorage.getItem('freelancerProfile'));
    if (storedProfile) {
      setProfileData(storedProfile);
    }
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen"><CircularProgress /></div>;

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <FaExclamationTriangle className="text-red-500 mb-4" style={{ fontSize: '48px' }} />
        <h2 className="text-xl font-semibold text-gray-800">Something went wrong!</h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white border-b border-blue-300 py-4 z-50 flex items-center justify-between">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="w-44 cursor-pointer flex items-center">
            <span className="ml-3 bg-white rounded-full text-blue-600 px-4 py-1 shadow-md">Freelancer</span>
          </div>
          <button 
            className="flex items-center text-gray-600 hover:bg-gray-200 rounded px-3 py-1"
          >
            <FaSignOutAlt className="mr-1" /> Logout
          </button>
        </div>
        <button className="md:hidden text-gray-600" onClick={() => setSidebarOpen(true)}>
          <FaBars className="text-2xl" />
        </button>
      </div>

      <div className="flex h-screen bg-slate-100">
        <aside className={`fixed left-0 top-0 h-full mt-20 border bg-slate-200 shadow-lg transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-64 z-20`}>
          <div className="flex justify-between p-4">
            <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Freelancer Dashboard
            </h1>
            <button onClick={() => setSidebarOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <nav className="flex flex-col gap-6 p-4">
            <button 
              onClick={() => handleTabChange('applicationsList')}
              className={`flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded ${activeTab === 'applicationsList' ? 'font-bold text-indigo-600' : ''}`}
            >
              <FaBriefcase className="mr-2 text-indigo-600" /> Applications List
            </button>
            <button 
              onClick={() => handleTabChange('profile')}
              className={`flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded ${activeTab === 'profile' ? 'font-bold text-indigo-600' : ''}`}
            >
              <FaUserFriends className="mr-2 text-indigo-600" /> Profile
            </button>
            <button 
              onClick={() => handleTabChange('income')}
              className={`flex items-center p-2 text-gray-600 hover:bg-gray-200 rounded ${activeTab === 'income' ? 'font-bold text-indigo-600' : ''}`}
            >
              <FaMoneyBillWave className="mr-2 text-indigo-600" /> Total Income
            </button>
          </nav>
        </aside>

        {sidebarOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={() => setSidebarOpen(false)}></div>
        )}

        <main className="flex-1 md:ml-64 ml-1 p-6 overflow-y-auto">
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 mt-20 mb-4">
            Welcome to the Freelancer Dashboard       
          </h1>

          {/* Card layout for income and applications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mb-6">
            <div className="p-6 hover:shadow-lg bg-white rounded-lg shadow-md w-full max-w-xs">
              <h3 className="text-md text-center text-slate-600 font-bold">💰 Total Income</h3>
              <p className="text-2xl font-bold text-center text-green-700">${profileData.totalIncome}</p>
            </div>
            <div className="p-6 hover:shadow-lg bg-white rounded-lg shadow-md w-full max-w-xs">
              <h3 className="text-md text-center text-slate-600 font-bold">📄 Applications</h3>
              <p className="text-2xl font-bold text-center text-purple-700">{profileData.appliedJobs.length}</p>
            </div>
            <div className="p-6 hover:shadow-lg bg-white rounded-lg shadow-md w-full max-w-xs">
              <h3 className="text-md text-center text-slate-600 font-bold">👥 Clients</h3>
              <p className="text-2xl font-bold text-center text-blue-700">{profileData.clients.length}</p>
            </div>
          </div>

          {/* Render the appropriate component based on active tab */}
          {activeTab === 'applicationsList' && <ApplicationsList applications={profileData.appliedJobs} />}
          {activeTab === 'profile' && <ProfileForm profileData={profileData} onProfileChange={handleProfileChange} />}
          {/* Add more components for income management if needed */}
        </main>
        <ToastContainer />
      </div>
    </>
  );
};

export default FreelancerDashboard;
