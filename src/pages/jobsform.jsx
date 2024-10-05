import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from '@mui/material';
import { FaEnvelope, FaPhone, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import backgroundImage from '../assets/assets/winter.jpg';

const JobPostingForm = () => {
    const [formData, setFormData] = useState({
        job_title: '',
        company_name: '',
        email: '',
        mobile: '',
        location: '',
        description: '',
        requirements: '',
        salary: '',
        logo: null,
        work_type: '',
        work_details: '',
        user: 1,
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
            const response = await fetch("http://127.0.0.1:8000/api/api/jobs/", {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                toast.success("Job posted successfully!");
                setFormData({
                    job_title: '',
                    company_name: '',
                    email: '',
                    mobile: '',
                    location: '',
                    description: '',
                    requirements: '',
                    salary: '',
                    logo: null,
                    work_type: '',
                    work_details: '',
                    user: 1,
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
            job_title: '',
            company_name: '',
            email: '',
            mobile: '',
            location: '',
            description: '',
            requirements: '',
            salary: '',
            logo: null,
            work_type: '',
            work_details: '',
            user: 1,
        });
    };

    return (
        <div
            className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="bg-black opacity-60"></div>
            <div className="flex min-h-full mt-20 mb-20 flex-col justify-center items-center w-[66%] mx-auto ">
                <div className="mt-10 w-full bg-slate-400 rounded-xl shadow-lg p-8 backdrop-blur-lg">
                    <h1 className="text-center text-3xl font-bold leading-9 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
                        Post a Job
                    </h1>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div>
                            <label htmlFor="job_title" className="block text-lg font-semibold text-gray-900">
                                <FaBuilding size={20} className="inline-block mr-2 text-blue-500" /> Job Title
                            </label>
                            <input
                                id="job_title"
                                name="job_title"
                                type="text"
                                required
                                value={formData.job_title}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="company_name" className="block text-lg font-semibold text-gray-900">
                                <FaBuilding size={20} className="inline-block mr-2 text-blue-500" /> Company Name
                            </label>
                            <input
                                id="company_name"
                                name="company_name"
                                type="text"
                                required
                                value={formData.company_name}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-lg font-semibold text-gray-900">
                                <FaEnvelope size={20} className="inline-block mr-2 text-blue-500" /> Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="mobile" className="block text-lg font-semibold text-gray-900">
                                <FaPhone size={20} className="inline-block mr-2 text-blue-500" /> Mobile
                            </label>
                            <input
                                id="mobile"
                                name="mobile"
                                type="tel"
                                required
                                value={formData.mobile}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="location" className="block text-lg font-semibold text-gray-900">
                                <FaMapMarkerAlt size={20} className="inline-block mr-2 text-blue-500" /> Location
                            </label>
                            <input
                                id="location"
                                name="location"
                                type="text"
                                required
                                value={formData.location}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                            />
                        </div>

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
                                rows={3} // Set rows for uniform height
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
                                rows={3} // Set rows for uniform height
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
                            <label htmlFor="work_type" className="block text-lg font-semibold text-gray-900">
                                Work Type
                            </label>
                            <select
                                id="work_type"
                                name="work_type"
                                required
                                value={formData.work_type}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                            >
                                <option value="">Select work type</option>
                                <option value="fixed">Fixed</option>
                                <option value="hourly">Hourly</option>
                                <option value="contract">Contract</option>
                                <option value="temporary">Temporary</option>
                                <option value="freelance">Freelance</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="work_details" className="block text-lg font-semibold text-gray-900">
                                Work Details
                            </label>
                            <textarea
                                id="work_details"
                                name="work_details"
                                required
                                value={formData.work_details}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                                rows={3} // Set rows for uniform height
                            />
                        </div>

                        <div>
                            <label htmlFor="logo" className="block text-lg font-semibold text-gray-900">
                                Company Logo
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

                        {/* Buttons */}
                        <div className="flex justify-between mt-4 md:mt-6">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="flex-1 px-4 py-2 font-bold text-white bg-transparent border-2 border-red-600 rounded-full hover:bg-red-600 transition"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className={`flex-1 px-4 py-2 font-bold text-white bg-transparent border-2 border-blue-600 rounded-full hover:bg-blue-600 transition ${loading && 'opacity-50 cursor-not-allowed'}`}
                                disabled={loading}
                            >
                                {loading ? <CircularProgress size={24} /> : "Submit"}
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
