import React from 'react';

const ApplicationsList = () => {
  // Dummy data
  const applications = [
    {
      id: 1,
      jobTitle: 'Frontend Developer',
      company: 'Tech Solutions',
      status: 'Pending',
      dateApplied: '2024-09-21',
    },
    {
      id: 2,
      jobTitle: 'Backend Engineer',
      company: 'InnovateX',
      status: 'Accepted',
      dateApplied: '2024-08-10',
    },
    {
      id: 3,
      jobTitle: 'Full Stack Developer',
      company: 'GlobalSoft',
      status: 'Rejected',
      dateApplied: '2024-07-15',
    },
  ];

  if (applications.length === 0) {
    return <p className="text-gray-500 text-center">No applications available</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="py-3 px-6 text-left">Job Title</th>
            <th className="py-3 px-6 text-left">Company</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Date Applied</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id} className="border-b border-gray-200">
              <td className="py-3 px-6">{application.jobTitle}</td>
              <td className="py-3 px-6">{application.company}</td>
              <td
                className={`py-3 px-6 font-semibold ${
                  application.status === 'Pending'
                    ? 'text-yellow-600'
                    : application.status === 'Rejected'
                    ? 'text-red-600'
                    : 'text-green-600'
                }`}
              >
                {application.status}
              </td>
              <td className="py-3 px-6 text-gray-500">{application.dateApplied}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationsList;
