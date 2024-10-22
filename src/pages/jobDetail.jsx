import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobs from '../components/jobs'; // Assuming this is an array of job objects
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const job = jobs.find(job => job.id === Number(jobId)) || jobs.find(job => job.id === 1); // Default to job ID 1 if not found

    const [applicantName, setApplicantName] = useState('');
    const [applicantEmail, setApplicantEmail] = useState('');
    const [coverLetter, setCoverLetter] = useState(null);
    const [coverLetterFileName, setCoverLetterFileName] = useState('');
    const [proposal, setProposal] = useState('');
    const [loading, setLoading] = useState(false);

    const showAlert = (message, type) => {
        toast[type](message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            pauseOnFocusLoss: true,
        });
    };

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            showAlert('Please log in first.', 'error');
            navigate('/login'); // Redirect to login page
            return;
        }

        // Set default name and email here if necessary
        setApplicantName('Default Name'); // Or any other default value
        setApplicantEmail('default@example.com'); // Or any other default value
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        const formData = new FormData();
        formData.append('applicant_name', applicantName);
        formData.append('applicant_email', applicantEmail);
        formData.append('cover_letter', coverLetter);
        formData.append('proposal', proposal);
        formData.append('job', 1); // Hard-coded job ID to 1
        formData.append('company_name', job.companyName || 'Default Company');
    
        const accessToken = localStorage.getItem('accessToken');
    
        try {
            await axios.post('http://127.0.0.1:8000/api/applications/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
            showAlert('Application submitted successfully!', 'success');
            navigate(-1);
        } catch (error) {
            console.error('Error submitting application:', error);
            showAlert('Error submitting application. Please try again.', 'error');
        } finally {
            setLoading(false);
        }
    };
    

    const handleCancel = () => {
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

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
            <ToastContainer />

            <div className="max-w-4xl w-full mx-auto p-4">
                <img 
                    src={job.logo} 
                    alt={`${job.companyName || 'Default Company'} logo`} 
                    className="w-full h-20 object-contain mb-6" 
                />
                <div className="bg-white rounded-lg shadow-lg p-8 w-full">
                    <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
                        {job.jobTitle || 'Job Title'}
                    </h1>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                        <strong>Company:</strong> 
                        <span className="text-green-600">{job.companyName || 'Default Company'}</span>
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                        <strong>Location:</strong> 
                        <span className="text-gray-800">{job.location || 'N/A'}</span>
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                        <strong>Contract Type:</strong> 
                        <span className="text-gray-800">{job.contractType || 'N/A'}</span>
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        <strong>Description:</strong> 
                        <span className="text-blue-600">{job.description || 'N/A'}</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                        <strong>Requirements:</strong> 
                        <span className="text-green-600">{job.requirements || 'N/A'}</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                        <strong>Experience:</strong> 
                        <span className="text-orange-600">{job.experience || 'N/A'}</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                        <strong>Salary:</strong> 
                        <span className="text-red-600">{job.salary || 'N/A'}</span>
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                        <strong>Contact:</strong> 
                        <span className="text-gray-800">📧 {job.email || 'N/A'} | 📞 {job.phone || 'N/A'}</span>
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
                        className="border border-gray-300 w-2/3 rounded-lg p-3 mb-4 bg-gray-200 cursor-not-allowed"
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        value={applicantEmail} 
                        className="border border-gray-300 rounded-lg p-3 w-2/3 mb-4 bg-gray-200 cursor-not-allowed"
                    />
                    <label className="flex items-center mb-4">
                        <span className="text-blue-500">📁</span>
                        <input 
                            type="file" 
                            accept=".pdf" 
                            onChange={handleFileChange} 
                            className="hidden" 
                        />
                        <span className="cursor-pointer text-blue-500 hover:underline ml-2">Upload Cover Letter (PDF) (Optional)</span>
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
                            className="flex-1 bg-transparent text-blue-500 font-bold py-2 px-3 rounded-full border border-blue-500 shadow-lg hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-600 transition duration-200 hover:shadow-xl"
                            disabled={loading}
                        >
                            {loading ? <><CircularProgress size={24} color="inherit" className="mr-2" /> Submitting...</> : 'Submit Application'}
                        </button>
                        <button 
                            type="button" 
                            onClick={handleCancel} 
                            className="flex-1 bg-red-500 text-white font-bold py-2 px-3 rounded-full border border-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 active:bg-red-700 transition duration-200"
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
