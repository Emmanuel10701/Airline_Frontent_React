import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import axios from 'axios';

const JobsList = () => {
  const [jobs, setJobs] = useState([]); // State to store jobs data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  // Fetch job data from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/jobs/'); // Replace with your API URL
        setJobs(response.data); // Set fetched data to jobs state
      } catch (err) {
        setError(err.message); // Handle error
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchJobs();
  }, []);

  const handleJobClick = (job) => {
    navigate(`/interview/${job.id}`, { state: { job } }); // Use navigate with state
  };

  // Handle loading state
  if (loading) {
    return <p className="text-gray-500 text-center">Loading jobs...</p>;
  }

  // Handle error state
  if (error) {
    return <p className="text-red-500 text-center">Error: {error}</p>;
  }

  return (
    <div className="mb-4 bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
      <h2 className="text-xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500 mb-4">Jobs List</h2>
      <ul>
        {jobs.map((job) => (
          <li
            key={job.id}
            className="flex justify-between items-center py-4 border-b border-gray-200 cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-300 rounded-lg shadow-sm"
            onClick={() => handleJobClick(job)}
          >
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{job.title}</h3>
              <p className="text-gray-600">{job.description}</p>
            </div>
            <span className="text-gray-500">{job.applicants} Applicants</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobsList;
