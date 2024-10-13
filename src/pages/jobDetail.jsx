import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobs from '../components/jobs'; // Assuming this is an array of job objects
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-80">
                <h2 className="text-lg font-bold mb-4">Please Log In</h2>
                <p className="mb-4">You need to be logged in to apply for this job.</p>
                <div className="flex justify-around">
                    <button 
                        onClick={onLogin} 
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    >
                        Log In
                    </button>
                    <button 
                        onClick={onClose} 
                        className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

const JobDetails = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const job = jobs.find(job => job.id === Number(jobId));

    const [applicantName, setApplicantName] = useState('');
    const [applicantEmail, setApplicantEmail] = useState('');
    const [coverLetter, setCoverLetter] = useState(null);
    const [coverLetterFileName, setCoverLetterFileName] = useState('');
    const [proposal, setProposal] = useState('');
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    // Assume you have a way to check if user is logged in
    const isLoggedIn = false; // Replace with actual logic

    if (!job) {
        return <div>Job not found!</div>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isLoggedIn) {
            setModalOpen(true);
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append('jobTitle', job.jobTitle);
        formData.append('companyName', job.companyName);
        formData.append('applicantName', applicantName);
        formData.append('applicantEmail', applicantEmail);
        formData.append('coverLetter', coverLetter);
        formData.append('proposal', proposal);

        try {
            await axios.post('http://127.0.0.1:8000/api/applications/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success('Application submitted successfully!');
            navigate(-1);
        } catch (error) {
            console.error('Error submitting application:', error);
            toast.error('Error submitting application. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setApplicantName('');
        setApplicantEmail('');
        setCoverLetter(null);
        setCoverLetterFileName('');
        setProposal('');
        navigate(-1);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCoverLetter(file);
            setCoverLetterFileName(file.name);
        }
    };

    const handleLogin = () => {
        navigate('/login'); // Adjust according to your routes
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
            <ToastContainer />
            <LoginModal 
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)} 
                onLogin={handleLogin}
            />
            <div className="max-w-4xl w-full mx-auto p-4">
                <img 
                    src={job.logo} 
                    alt={`${job.companyName} logo`} 
                    className="w-full h-20 object-contain mb-6" 
                />
                <div className="bg-white rounded-lg shadow-lg p-8 w-full">
                    <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
                        {job.jobTitle}
                    </h1>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                        <strong>Company:</strong> 
                        <span className="text-green-600">{job.companyName}</span>
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                        <strong>Location:</strong> 
                        <span className="text-gray-800">{job.location}</span>
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                        <strong>Contract Type:</strong> 
                        <span className="text-gray-800">{job.contractType}</span>
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        <strong>Description:</strong> 
                        <span className="text-blue-600">{job.description}</span>
                    </p>
                    <div className="mb-4 text-gray-700">
                        <p>🌟 Welcome to our job listing! Here, we value talent and dedication.</p>
                        <p>🚀 Join us to be part of innovative projects that make a difference.</p>
                    </div>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                        <strong>Requirements:</strong> 
                        <span className="text-green-600">{job.requirements}</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                        <strong>Experience:</strong> 
                        <span className="text-orange-600">{job.experience}</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                        <strong>Salary:</strong> 
                        <span className="text-red-600">{job.salary}</span>
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                        <strong>Contact:</strong> 
                        <span className="text-gray-800">📧 {job.email} | 📞 {job.phone}</span>
                    </p>
                </div>

                <h1 className="text-2xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                    Apply for this position now
                </h1>
                <form onSubmit={handleSubmit} className="mt-10 w-full flex flex-col justify-center items-center mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Application Form</h2>
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        value={applicantName} 
                        onChange={(e) => setApplicantName(e.target.value)} 
                        className="border border-gray-300 w-2/3 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm hover:shadow-md transition-shadow duration-200"
                        required
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        value={applicantEmail} 
                        onChange={(e) => setApplicantEmail(e.target.value)} 
                        className="border border-gray-300 rounded-lg p-3 w-2/3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm hover:shadow-md transition-shadow duration-200"
                        required
                    />
                    <label className="flex items-center mb-4">
                        <span className="text-blue-500">📁</span>
                        <input 
                            type="file" 
                            accept=".pdf" 
                            onChange={handleFileChange} 
                            className="hidden" 
                            required
                        />
                        <span className="cursor-pointer text-blue-500 hover:underline ml-2">Upload Cover Letter (PDF)</span>
                    </label>
                    {coverLetterFileName && (
                        <p className="text-sm text-gray-600 mb-4">Selected file: {coverLetterFileName}</p>
                    )}
                    <textarea 
                        placeholder="Proposal" 
                        value={proposal} 
                        onChange={(e) => setProposal(e.target.value)} 
                        className="border border-gray-300 resize-none h-40 rounded-lg p-3 w-2/3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm hover:shadow-md transition-shadow duration-200"
                        required
                    />
                    <div className="flex justify-around w-full items-center mt-4">
                        <button 
                            type="submit" 
                            className="flex-1 bg-blue-500 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-200 hover:shadow-xl"
                        >
                            {loading ? <><CircularProgress size={24} color="inherit" /> Processing...</> : 'Apply Now'}
                        </button>
                        <button 
                            type="button" 
                            onClick={handleCancel} 
                            className="flex-1 bg-gray-500 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:bg-gray-600 transition duration-200 hover:shadow-xl"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobDetails;
