import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobs from '../components/jobs'; // Assuming this is an array of job objects
import axios from 'axios'; // Import axios for API requests
import CircularProgress from '@mui/material/CircularProgress'; // Import Material UI spinner

const JobDetails = () => {
    const { jobId } = useParams(); // Get the jobId from the URL
    const navigate = useNavigate(); // Hook to navigate
    const job = jobs.find(job => job.id === Number(jobId)); // Find the job by ID

    const [applicantName, setApplicantName] = useState('');
    const [applicantEmail, setApplicantEmail] = useState('');
    const [coverLetter, setCoverLetter] = useState(null); // Only one file for cover letter
    const [coverLetterFileName, setCoverLetterFileName] = useState(''); // New state for the file name
    const [proposal, setProposal] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    if (!job) {
        return <div>Job not found!</div>; // Handle case where job is not found
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true

        const formData = new FormData();
        formData.append('jobTitle', job.jobTitle);
        formData.append('companyName', job.companyName);
        formData.append('applicantName', applicantName);
        formData.append('applicantEmail', applicantEmail);
        formData.append('coverLetter', coverLetter);
        formData.append('proposal', proposal); // Assuming this is text, adjust if necessary

        try {
            const response = await axios.post('YOUR_DJANGO_API_ENDPOINT', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSuccessMessage('Application submitted successfully!');
        } catch (error) {
            console.error('Error submitting application:', error);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    const handleCancel = () => {
        // Clear input fields
        setApplicantName('');
        setApplicantEmail('');
        setCoverLetter(null);
        setCoverLetterFileName(''); // Reset file name
        setProposal('');
        setSuccessMessage('');
        // Navigate back to the previous page
        navigate(-1);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCoverLetter(file);
            setCoverLetterFileName(file.name); // Set the file name
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
            <img 
                src={job.logo} 
                alt={`${job.companyName} logo`} 
                className="w-full h-20 object-contain mb-4" 
            />
            <div className="bg-white rounded-lg shadow-lg p-6 w-full">
                <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                    {job.jobTitle}
                </h1>

                <p className="text-lg font-bold"><strong>Company:</strong> {job.companyName}</p>
                <p className="text-lg"><strong>Location:</strong> {job.location}</p>
                <p className="text-lg"><strong>Contract Type:</strong> {job.contractType}</p>
                <p className="text-xl mt-2 mb-4"><strong>Description:</strong> <span style={{ color: 'blue' }}>{job.description}</span></p>
                <div className="mb-4">
                    <p>
                        🌟 Welcome to our job listing! Here, we value talent and dedication. Our team is committed to fostering a collaborative environment where your skills can shine. 
                    </p>
                    <p>
                        🚀 Join us to be part of innovative projects that make a difference. We believe in continuous growth and learning, ensuring that you have the resources to succeed.
                    </p>
                </div>
                <p className="text-lg"><strong>Requirements:</strong> <span style={{ color: 'green' }}>{job.requirements}</span></p>
                <p className="text-lg"><strong>Experience:</strong> <span style={{ color: 'orange' }}>{job.experience}</span></p>
                <p className="text-lg"><strong>Salary:</strong> <span style={{ color: 'red' }}>{job.salary}</span></p>
                <p className="text-lg"><strong>Contact:</strong> 📧 {job.email} | 📞 {job.phone}</p>

                <h1 className="text-2xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                Apply for this position now
                </h1>

                <form onSubmit={handleSubmit} className="mt-10 w-[60%] items-center justify-center mx-auto">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        value={applicantName} 
                        onChange={(e) => setApplicantName(e.target.value)} 
                        className="border rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        required
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        value={applicantEmail} 
                        onChange={(e) => setApplicantEmail(e.target.value)} 
                        className="border rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        required
                    />
                    <label className="flex items-center mb-4">
                        <span className="text-blue-500">📁</span>
                        <input 
                            type="file" 
                            accept=".pdf" // Only allow PDF files
                            onChange={handleFileChange} // Update the file change handler
                            className="hidden" 
                            required
                        />
                        <span className="cursor-pointer text-blue-500 ml-2">Upload Cover Letter (PDF)</span>
                    </label>
                    {coverLetterFileName && <p className="text-sm text-gray-600">Selected file: {coverLetterFileName}</p>} {/* Display the file name */}
                    <textarea 
                        placeholder="Proposal" 
                        value={proposal} 
                        onChange={(e) => setProposal(e.target.value)} 
                        className="border rounded p-2 w-full h-48 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        required
                    />
                    <div className="flex justify-around w-1/2 items-center mx-auto mt-4">
                        <button 
                            type="submit" 
                            className="flex-1 bg-transparent border border-blue-500 text-blue-500 font-bold py-3 px-4 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition duration-200 mr-2"
                        >
                            {loading ? <><CircularProgress size={24} color="inherit" /> Processing...</> : 'Apply Now'}
                        </button>
                        <button 
                            type="button" 
                            onClick={handleCancel} 
                            className="flex-1 bg-transparent border border-gray-500 text-gray-500 font-bold py-3 px-4 rounded-full shadow-md hover:bg-gray-500 hover:text-white transition duration-200"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
                
                {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
            </div>
        </div>
    );
};

export default JobDetails;
