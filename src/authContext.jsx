// src/AuthContext.js
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/', // Adjust base URL as needed
});

// Request interceptor to add the access token to every request
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Response interceptor to handle token refresh
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const refreshToken = localStorage.getItem('refreshToken');

        // Check if the error is due to an expired access token
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            // Attempt to refresh the token
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/auth/token/refresh/', {
                    refresh: refreshToken,
                });

                const { access } = response.data;
                localStorage.setItem('accessToken', access);

                // Update the original request with the new access token
                axiosInstance.defaults.headers['Authorization'] = `Bearer ${access}`;
                originalRequest.headers['Authorization'] = `Bearer ${access}`;

                return axiosInstance(originalRequest);
            } catch (refreshError) {
                console.error("Token refresh failed:", refreshError);
                // Handle refresh token failure (e.g., log the user out)
            }
        }

        return Promise.reject(error);
    }
);

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('accessToken'));

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        setIsAuthenticated(!!token);
    }, []);

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, logout, axiosInstance }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
