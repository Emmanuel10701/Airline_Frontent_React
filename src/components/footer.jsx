import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscription = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/subscribe/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail('');
        toast.success('Subscribed successfully!');
      } else {
        const errorData = await response.json();
        toast.error(`Subscription failed: ${errorData.email[0]}`);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-800 text-gray-100 py-8 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-6 flex-wrap">
          <Link to="#">
            <FaInstagram className="text-pink-500 w-6 h-6 hover:text-pink-400 transition-colors duration-300" />
          </Link>
          <Link to="#">
            <FaLinkedin className="text-blue-600 w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
          </Link>
          <Link to="#">
            <FaFacebook className="text-blue-500 w-6 h-6 hover:text-blue-400 transition-colors duration-300" />
          </Link>
          <Link to="#">
            <FaTwitter className="text-blue-400 w-6 h-6 hover:text-blue-300 transition-colors duration-300" />
          </Link>
        </div>

        <div className="text-center mb-6">
          <h4 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Stay updated with the latest job postings and career advice</p>

          <form onSubmit={handleSubscription} className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              className="px-4 py-3 w-full  md:w-1/3 text-gray-900 rounded-lg focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-300 w-full sm:w-auto"
              disabled={loading}
            >
              {loading ? (
                <>
                  <CircularProgress size={20} color="inherit" className="mr-2" />
                  Subscribing...
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        </div>

        <div className="text-center text-gray-400 text-sm mt-6">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>

      <ToastContainer 
        position="top-center" 
        autoClose={5000} 
        hideProgressBar={false} 
        closeOnClick 
        pauseOnHover 
        draggable 
        pauseOnFocusLoss 
      />
    </footer>
  );
};

export default Footer;
