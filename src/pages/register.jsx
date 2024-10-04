// src/components/Register.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { CircularProgress } from '@mui/material';
import backgroundImage from '../assets/assets/winter.jpg';
import Modal from '../components/modal'; // Import the Modal component

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: localStorage.getItem('userRole') // Get role from local storage
    });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!formData.role) {
            setModalOpen(true); // Open modal if no role is found
        }
    }, [formData.role]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match.");
            setLoading(false);
            return;
        }

        const dataToSend = { ...formData };

        try {
            const response = await fetch("http://127.0.0.1:8000/api/auth/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            if (response.ok) {
                const { token } = await response.json();
                localStorage.setItem('jwtToken', token);
                toast.success("Registration successful!");
                alert("Registration successful!");
                navigate('/login');
            } else {
                toast.error("Registration failed. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleModalClose = () => {
        setModalOpen(false);
        navigate('/account-selection'); // Redirect to account selection
    };

    return (
        <div
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
               

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md bg-white rounded-lg shadow-lg p-6 backdrop-blur-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h1 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
                        Register as {formData.role === 'client' ? 'Client' : 'Freelancer'}
                    </h1>
                </div>
                        <div>
                            <label htmlFor="username" className="block text-lg font-bold leading-6 text-gray-900">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                value={formData.username}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-0 py-4 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-lg font-bold leading-6 text-gray-900">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-0 py-4 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-lg font-bold leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-4 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                >
                                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-lg font-bold leading-6 text-gray-900">
                                Confirm Password
                            </label>
                            <div className="mt-2 relative">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-4 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                >
                                    {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between mb-4">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                Remember me
                            </label>
                            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </a>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : "Register"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
            {modalOpen && (
                <Modal
                    message="You need to select an account type before registering."
                    onClose={() => setModalOpen(false)}
                    onConfirm={handleModalClose}
                />
            )}
            <ToastContainer />
        </div>
    );
};

export default Register;
