import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { CircularProgress } from '@mui/material';
import { FaGoogle, FaTwitter } from 'react-icons/fa'; // Import Google and Twitter icons
import backgroundImage from '../assets/assets/winter.jpg';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const { access, refresh } = await response.json();
                localStorage.setItem('accessToken', access);
                localStorage.setItem('refreshToken', refresh);
                toast.success("Login successful!");
                navigate('/dashboard'); // Redirect to dashboard or home page
            } else {
                const errorData = await response.json();
                toast.error(errorData.detail || "Login failed. Please check your credentials.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = () => {
        navigate('/forgot-password'); // Redirect to the forgot password page
    };

    const handleSocialLogin = (provider) => {
        window.location.href = `http://your-django-api/auth/${provider}/`; // Replace with actual URL
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
                                Login
                            </h1>
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
                                className="mt-2 block w-full rounded-md border-0 py-4 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 px-3"
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
                                    className="block w-full rounded-md border-0 py-4 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 px-3"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl"
                                >
                                    {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between mb-4">
                            <button type="button" onClick={handleForgotPassword} className="text-sm text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </button>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
                            </button>
                        </div>
                    </form>

                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => handleSocialLogin('google')}
                            className="flex items-center justify-center bg-red-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-red-400"
                        >
                            <FaGoogle className="mr-2" /> Login with Google
                        </button>
                        <button
                            onClick={() => handleSocialLogin('twitter')}
                            className="flex items-center justify-center bg-blue-400 text-white rounded-md px-4 py-2 hover:bg-blue-300"
                        >
                            <FaTwitter className="mr-2" /> Login with Twitter
                        </button>
                    </div>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don't have an account?{' '}
                        <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
