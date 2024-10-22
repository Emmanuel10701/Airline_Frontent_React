import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { CircularProgress } from '@mui/material';

const Alert = ({ type, message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg text-white max-w-lg z-50 transition-opacity duration-300 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
            <div className="flex justify-between items-center">
                <span>{message}</span>
                <button onClick={onClose} className="ml-4">&times;</button>
            </div>
        </div>
    );
};

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });
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
                setAlert({ show: true, type: 'success', message: "Login successful!" });

                // Small delay before redirecting
                setTimeout(() => {
                    navigate('/jobslist');
                }, 1000);
            } else {
                const errorData = await response.json();
                setAlert({ show: true, type: 'error', message: errorData.detail || "Login failed. Please check your credentials." });
            }
        } catch (error) {
            setAlert({ show: true, type: 'error', message: "An error occurred. Please try again." });
            console.error("Login error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };

    return (
        <div className="relative bg-slate-100 min-h-screen flex items-center justify-center">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md bg-white rounded-lg shadow-lg p-6 backdrop-blur-lg">
                    {alert.show && (
                        <Alert
                            type={alert.type}
                            message={alert.message}
                            onClose={() => setAlert({ show: false, type: '', message: '' })}
                        />
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                            <h1 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 mb-6">Login</h1>
                        </div>

                        <div>
                            <label htmlFor="username" className="block text-lg font-bold leading-6 text-gray-900">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                value={formData.username}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-0 py-4 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 px-3"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-lg font-bold leading-6 text-gray-900">Password</label>
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

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don't have an account?{' '}
                        <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
