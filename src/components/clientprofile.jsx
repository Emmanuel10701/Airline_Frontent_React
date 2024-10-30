import React, { useState, useEffect } from 'react';
import placeholder from '../assets/default.png';

const CustomAlert = ({ message, type, onClose }) => {
    if (!message) return null;

    const alertClass = type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';

    return (
        <div className={`p-4 mb-4 ${alertClass} border rounded`} role="alert">
            <span>{message}</span>
            <button onClick={onClose} className="ml-4 text-sm text-blue-600 hover:underline">
                Close
            </button>
        </div>
    );
};

const ClientProfileForm = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        email: '',
        phoneNumber: '',
        address: '',
        projectDescription: '',
        budget: '',
        profileImage: null,
    });
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(true);
    const [alert, setAlert] = useState({ message: '', type: '' });

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('clientProfile'));
        if (storedData) {
            setFormData(storedData);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            localStorage.setItem('clientProfile', JSON.stringify(formData));
            setAlert({ message: "Client profile saved successfully!", type: 'success' });
            setIsEditing(false);
        } catch (error) {
            setAlert({ message: "An error occurred. Please try again.", type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const closeAlert = () => {
        setAlert({ message: '', type: '' });
    };

    return (
        <div className="flex items-center mt-[33%] justify-center w-full h-screen bg-slate-100 p-4">
            <div className="w-[79%] bg-white p-8 rounded-lg shadow-lg relative">
                <div className="flex justify-center mb-6">
                    <img
                        src={formData.profileImage ? URL.createObjectURL(formData.profileImage) : placeholder}
                        alt="Profile"
                        className="w-24 h-24 rounded-full shadow-md border-2 border-indigo-500 object-cover"
                    />
                </div>
                <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {isEditing ? 'Edit Client Profile' : 'Client Profile'}
                </h1>

                <CustomAlert message={alert.message} type={alert.type} onClose={closeAlert} />

                <form onSubmit={handleSubmit}>
                    {[ 
                        { label: 'Company Name', name: 'companyName', type: 'text' },
                        { label: 'Contact Name', name: 'contactName', type: 'text' },
                        { label: 'Email', name: 'email', type: 'email' },
                        { label: 'Phone Number', name: 'phoneNumber', type: 'text' },
                        { label: 'Address', name: 'address', type: 'text' },
                        { label: 'Budget', name: 'budget', type: 'text' }
                    ].map(({ label, name, type }) => (
                        <div className="mb-4" key={name}>
                            <label className="block text-lg font-semibold text-indigo-600 mb-1">{label}</label>
                            <input
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                required
                                disabled={!isEditing}
                                className="p-3 border border-gray-300 rounded-lg shadow-inner w-[80%] focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>
                    ))}
                    <div className="mb-4">
                        <label className="block text-lg font-semibold my-6 text-indigo-600 mb-1">Project Description</label>
                        <textarea
                            name="projectDescription"
                            value={formData.projectDescription}
                            onChange={handleChange}
                            required
                            disabled={!isEditing}
                            className="p-3 border border-gray-300 resize-none h-40 rounded-lg shadow-inner focus:outline-none focus:ring-2 w-[80%] focus:ring-indigo-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold my-6 text-indigo-600 mb-1">Upload Profile Image</label>
                        <input
                            type="file"
                            name="profileImage"
                            accept="image/*"
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="border border-gray-300 rounded p-2 shadow-inner w-[80%]"
                        />
                    </div>
                    <div className="flex justify-between mb-4">
                        <button
                            type="submit"
                            className="w-full border border-indigo-600 text-indigo-600 py-2 rounded-full hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
                        >
                            {loading ? 'Loading...' : 'Save Profile'}
                        </button>
                        <button
                            type="button"
                            onClick={handleEditToggle}
                            className={`w-full border border-${isEditing ? 'red' : 'green'}-600 text-${isEditing ? 'red' : 'green'}-600 py-2 rounded-full hover:bg-${isEditing ? 'red' : 'green'}-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-${isEditing ? 'red' : 'green'}-500 focus:ring-opacity-50 transition duration-200 ml-2`}
                        >
                            {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClientProfileForm;
