import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Update for React Router
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPasswordPage = () => {
  const navigate = useNavigate(); // Use useNavigate
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Extract uidb64 and token from the URL
  const uidb64 = new URLSearchParams(window.location.search).get('uidb64');
  const token = new URLSearchParams(window.location.search).get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (newPassword.length < 8) {
        toast.error('Password must be at least 8 characters long');
        setLoading(false);
        return;
      }
      if (newPassword !== confirmPassword) {
        toast.error("Passwords don't match");
        setLoading(false);
        return;
      }

      const response = await fetch(`http://127.0.0.1:8000/api/auth/reset-password-confirm/${uidb64}/${token}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ new_password: newPassword }), // Updated to match backend
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        navigate('/login'); // Use navigate to redirect
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('Failed to reset password');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 mb-10 w-full bg-white border-b border-blue-300 py-4 z-50 flex items-center justify-between shadow-md">
        <div className="container mx-auto flex items-center px-4 md:px-8">
          <div className="w-44 cursor-pointer flex items-center">
            <span className="ml-3 bg-white rounded-full text-blue-600 px-6 py-2 shadow-md">Reset</span>
          </div>
        </div>
      </div>
      <div className="flex items-center md:m-10 justify-center min-h-screen bg-gray-100 p-4">
        <form onSubmit={handleSubmit} className="max-w-md w-full bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-4xl mt-10 text-slate-700 font-extrabold mb-6 text-center">🛅 Reset Password</h2>

          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              className={`w-full p-2 border ${newPassword ? 'border-green-500' : 'border-gray-300'} rounded-md transition-colors`}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className={`w-full p-2 border ${confirmPassword ? 'border-green-500' : 'border-gray-300'} rounded-md transition-colors`}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className={`w-full py-2 bg-blue-500 text-white rounded-full shadow-md transition duration-300 ${loading ? 'opacity-50' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <CircularProgress size={24} color="inherit" />
                <span className="ml-2">Processing...</span>
              </div>
            ) : (
              'Reset Password'
            )}
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default ResetPasswordPage;
