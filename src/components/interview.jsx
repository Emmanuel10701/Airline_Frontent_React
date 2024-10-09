import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const dummyJobs = [
  { id: 1, title: "Software Engineer", description: "Develop web applications", applicants: 5 },
  { id: 2, title: "Product Manager", description: "Lead product development", applicants: 3 },
  { id: 3, title: "Designer", description: "Create UI/UX designs", applicants: 7 },
];

const JobsList = () => {
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleJobClick = (job) => {
    navigate(`/interview/${job.id}`, { state: { job } }); // Use navigate with state
  };

  return (
    <div className="mb-4 bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
      <h2 className="text-xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500 mb-4">Jobs List</h2>
      <ul>
        {dummyJobs.map(job => (
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
