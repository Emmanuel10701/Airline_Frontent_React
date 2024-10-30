import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { FaEnvelope, FaPhone, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

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
    const [logoPreview, setLogoPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoPreview(reader.result);
                setFormData((prevData) => ({ ...prevData, logo: file }));
            };
            reader.readAsDataURL(file);
        } else {
            setFormData((prevData) => ({ ...prevData, logo: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { job_title, company_name, email, mobile, location, description, requirements, salary, work_type, work_details, logo } = formData;
        if (!job_title || !company_name || !email || !mobile || !location || !description || !requirements || !salary || !work_type || !work_details || !logo) {
            alert("Please fill in all required fields.");
            setLoading(false);
            return;
        }

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
                alert("Job posted successfully!");
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
                setLogoPreview(null);
            } else {
                alert("Failed to post job. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
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
        setLogoPreview(null);
    };

    return (
        <div className="relative w-full min-h-screen bg-slate-100 flex items-center justify-center bg-cover bg-center">
            <div className="flex min-h-full w-full mt-20 mb-20 mx-4 flex-col justify-center items-center md:w-[90%] md:mx-auto">
                <div className="mt-10 w-full bg-white rounded-xl shadow-lg p-8 backdrop-blur-lg">
                    <h1 className="text-center text-3xl font-bold leading-9 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
                        Post a Job
                    </h1>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 shandow-md md:grid-cols-2 gap-6">
                        {/* Logo Upload */}
                        <div className="flex flex-col items-center mb-4">
                            <label className="block text-lg font-semibold text-gray-900">
                                Upload Logo
                            </label>
                            <div className="mt-2">
                                <label className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-gray-300 cursor-pointer hover:shadow-lg transition">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleLogoUpload}
                                        className="hidden"
                                    />
                                    {logoPreview ? (
                                        <img
                                            src={logoPreview}
                                            alt="Logo Preview"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-gray-500 text-2xl">+</span>
                                    )}
                                </label>
                                <span className="text-gray-500 mt-1">Click to upload logo</span>
                            </div>
                        </div>

                        {/* Input Fields */}
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
                                className="mt-2 block w-full resize-none h-40 rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                                rows={3}
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
                                className="mt-2 block w-full rounded-lg resize-none h-40 border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                                rows={3}
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
                                <option value="remote">Remote</option>
                                <option value="site">Site</option>
                                <option value="contract">Contract</option>
                                <option value="temporary">Temporary</option>
                                <option value="permanent">Permanent</option>
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
                                className="mt-2 block w-full resize-none h-40 rounded-lg border-2 border-gray-300 py-3 px-4 text-lg text-gray-900 shadow-md focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none"
                                rows={3}
                            />
                        </div>

                        {/* Buttons */}
                    </form>
                    <div className="flex justify-center w-full md:w-1/2 items-center gap-4 mt-2 md:mt-6">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="flex-1 py-2 px-3 w-1/2 font-bold text-gray-900 rounded-full bg-white shadow-md hover:shadow-lg transition"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className={`flex-1 py-2 w-1/2 px-3 font-bold text-gray-900 rounded-full bg-white shadow-md hover:shadow-lg transition ${loading && 'opacity-50 cursor-not-allowed'}`}
                            disabled={loading}
                        >
                            {loading ? <CircularProgress size={24} /> : "Submit"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobPostingForm;
