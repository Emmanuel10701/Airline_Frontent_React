import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import placeholder from '../assets/default.png';

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
    const [isEditing, setIsEditing] = useState(true); // Start in editable mode
    const navigate = useNavigate();

    useEffect(() => {
        // Load existing data from local storage if it exists
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
            // Simulate saving to local storage
            localStorage.setItem('clientProfile', JSON.stringify(formData));
            toast.success("Client profile saved successfully!");
            setIsEditing(false); // Lock fields after saving
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="flex items-center mt-[33%] justify-center w-full h-screen bg-slate-100 p-4">
            <div className="w-[79%]  bg-white p-8 rounded-lg shadow-lg relative">
                {/* Profile Image */}
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


                <form onSubmit={handleSubmit}>
                    {/* Form Fields */}
                    {[
                        { label: 'Company Name', name: 'companyName', type: 'text' },
                        { label: 'Contact Name', name: 'contactName', type: 'text' },
                        { label: 'Email', name: 'email', type: 'email' },
                        { label: 'Phone Number', name: 'phoneNumber', type: 'text' },
                        { label: 'Address', name: 'address', type: 'text' },
                        { label: 'Budget', name: 'budget', type: 'text' }
                    ].map(({ label, name, type }) => (
                        <div className="mb-4" key={name}>
                            <label className="block text-lg font-semibold text-indigo-600 mb-1">
                                {label}
                            </label>
                            <input
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                required
                                disabled={!isEditing} // Disable input if not editing
                                className=" p-3 border border-gray-300 rounded-lg shadow-inner w-[80%] focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
                            className=" p-3 border border-gray-300 resize-none h-40 rounded-lg shadow-inner focus:outline-none focus:ring-2 w-[80%] focus:ring-indigo-400"
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
                    {/* Submit and Edit Buttons */}
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
                <ToastContainer />
            </div>
        </div>
    );
};

export default ClientProfileForm;
