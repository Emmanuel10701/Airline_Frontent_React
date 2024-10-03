// src/NotFound.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const NotFound = () => {
  const [loading, setLoading] = useState(false);

  const handleGoBack = () => {
    setLoading(true);
    setTimeout(() => {
      // Simulate navigation
      window.location.href = '/'; // Redirect to home after 2 seconds
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-500 text-center max-w-md">
        Sorry, the page you are looking for does not exist. It might have been removed or never existed in the first place.
      </p>
      <button
        onClick={handleGoBack}
        className="mt-6 flex items-center px-8 py-3 font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition duration-300"
        disabled={loading}
      >
        {loading ? (
          <>
            <CircularProgress size={24} className="mr-2" />
            Processing...
          </>
        ) : (
          "Go Back Home"
        )}
      </button>
    </div>
  );
};

export default NotFound;
