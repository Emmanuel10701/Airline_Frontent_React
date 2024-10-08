import React from 'react';

// Dummy data for applicants
const dummyApplicants = [
  { id: 1, name: 'Alice Johnson', status: 'Pending' },
  { id: 2, name: 'Bob Smith', status: 'Pending' },
  { id: 3, name: 'Charlie Brown', status: 'Pending' },
];

const Interview = ({ job }) => {
  const handleAccept = (applicantId) => {
    // Logic to accept applicant
    console.log(`Accepted applicant ID: ${applicantId}`);
  };

  const handleReject = (applicantId) => {
    // Logic to reject applicant
    console.log(`Rejected applicant ID: ${applicantId}`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-102">
      <h2 className="text-2xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
        Interview for Job: {job.title}
      </h2>
      <p className="text-md text-gray-600 mb-4">Here are the applicants for this position:</p>
      <ul className="space-y-4">
        {dummyApplicants.map((applicant) => (
          <li key={applicant.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm transition-all duration-300 hover:bg-gray-100">
            <span className="font-semibold">{applicant.name}</span>
            <span className="text-sm text-gray-500">{applicant.status}</span>
            <div>
              <button
                onClick={() => handleAccept(applicant.id)}
                className="bg-green-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-green-600 transition duration-200"
              >
                Accept
              </button>
              <button
                onClick={() => handleReject(applicant.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
              >
                Reject
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Interview;
