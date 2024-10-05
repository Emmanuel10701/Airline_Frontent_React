import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from '@mui/material';
import { MdEmail, MdPhone, MdBusiness } from 'react-icons/md';
import backgroundImage from '../assets/assets/winter.jpg';
import placeholder from '../assets/logo.webp';

const JobPostingForm = () => {
    const [formData, setFormData] = useState({
        jobTitle: '',
        companyName: '',
        email: '',
        location: '',
        description: '',
        requirements: '',
        salary: '',
        logo: null,
        location: '',
        workType: '',
        workDetails: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({ ...prevData, logo: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await fetch("http://127.0.0.1:8000/api/jobs/", {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                toast.success("Job posted successfully!");
                setFormData({
                    jobTitle: '',
                    companyName: '',
                    email: '',
                    location: '',
                    description: '',
                    requirements: '',
                    salary: '',
                    logo: null,
                    location: '',
                    workType: '',
                    workDetails: '',
                });
            } else {
                toast.error("Failed to post job. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setFormData({
            jobTitle: '',
            companyName: '',
            email: '',
            location: '',
            description: '',
            requirements: '',
            salary: '',
            logo: null,
            location: '',
            workType: '',
            workDetails: '',
        });
    };

    return (
        <div
            className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className=" bg-black opacity-60"></div>
            <div className="flex min-h-full mt-20 mb-20 flex-col justify-center items-center w-[66%] mx-auto ">
                <div className="mt-10 w-full bg-slate-400 rounded-xl shadow-lg p-8 backdrop-blur-lg">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                            {/* Placeholder for Logo */}
                            <img src={formData.logo ? URL.createObjectURL(formData.logo) : placeholder} alt="Logo" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <h1 className="text-center text-3xl font-bold leading-9 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
                            Post a Job
                        </h1>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div>
                            <label htmlFor="jobTitle" className="block text-lg font-semibold text-gray-900">
                                Job Title
                            </label>
                            <input
                                id="jobTitle"
                                name="jobTitle"
                                type="text"
                                required
                                value={formData.jobTitle}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="companyName" className="block text-lg font-semibold text-gray-900">
                                Company Name
                            </label>
                            <div className="relative mt-2">
                                <MdBusiness className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    id="companyName"
                                    name="companyName"
                                    type="text"
                                    required
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="block w-full rounded-lg border-2 border-gray-300 py-3 pl-10 pr-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-lg font-semibold text-gray-900">
                                Email
                            </label>
                            <div className="relative mt-2">
                                <MdEmail className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full rounded-lg border-2 border-gray-300 py-3 pl-10 pr-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="location" className="block text-lg font-semibold text-gray-900">
                                location Number
                            </label>
                            <div className="relative mt-2">
                                <MdPhone className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    required
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="block w-full rounded-lg border-2 border-gray-300 py-3 pl-10 pr-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div>
                            <label htmlFor="description" className="block text-lg font-semibold text-gray-900">
                                Job Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                required
                                value={formData.description}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="requirements" className="block text-lg font-semibold text-gray-900">
                                Requirements
                            </label>
                            <textarea
                                id="requirements"
                                name="requirements"
                                required
                                value={formData.requirements}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="salary" className="block text-lg font-semibold text-gray-900">
                                Salary
                            </label>
                            <input
                                id="salary"
                                name="salary"
                                type="text"
                                required
                                value={formData.salary}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="location" className="block text-lg font-semibold text-gray-900">
                                Location
                            </label>
                            <select
                                id="location"
                                name="location"
                                required
                                value={formData.location}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                            >
                                <option value="">Select a location</option>
                                <option value="remote">Remote</option>
                                <option value="onsite">On-site</option>
                                <option value="worldwide">Worldwide</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="workType" className="block text-lg font-semibold text-gray-900">
                                Work Type
                            </label>
                            <select
                                id="workType"
                                name="workType"
                                required
                                value={formData.workType}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                            >
                                <option value="">Select work type</option>
                                <option value="fixed">Fixed</option>
                                <option value="hourly">Hourly</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="logo" className="block text-lg font-semibold text-gray-900">
                                Logo (optional)
                            </label>
                            <input
                                id="logo"
                                name="logo"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="mt-2 block w-full rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                            />
                        </div>

                        <div className="flex justify-between md:col-span-2">
                            <button
                                type="submit"
                                className="flex-1 rounded-full bg-transparent border border-indigo-600 px-3 py-2 text-lg font-semibold leading-6 text-indigo-600 shadow-md hover:bg-indigo-600 hover:text-white transition duration-300"
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : "Post Job"}
                            </button>
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="ml-4 flex-1 rounded-full bg-transparent border border-red-600 px-3 py-2 text-lg font-semibold leading-6 text-red-600 shadow-md hover:bg-red-600 hover:text-white transition duration-300"
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : "Cancel"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobPostingForm;
