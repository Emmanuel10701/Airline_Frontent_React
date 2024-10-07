import React from 'react';
import { useHistory } from 'react-router-dom';

const dummyJobs = [
  { id: 1, title: "Software Engineer", description: "Develop web applications", applicants: 5 },
  { id: 2, title: "Product Manager", description: "Lead product development", applicants: 3 },
  { id: 3, title: "Designer", description: "Create UI/UX designs", applicants: 7 },
];

const JobsList = () => {
  const history = useHistory();

  const handleJobClick = (job) => {
    history.push(`/interview/${job.id}`, { job });
  };

  return (
    <div className="mb-4 bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold">Jobs List</h2>
      <ul>
        {dummyJobs.map(job => (
          <li
            key={job.id}
            className="flex justify-between py-2 border-b cursor-pointer hover:bg-gray-100"
            onClick={() => handleJobClick(job)}
          >
            <div>
              <h3 className="font-semibold">{job.title}</h3>
              <p>{job.description}</p>
            </div>
            <span>{job.applicants} Applicants</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobsList;
