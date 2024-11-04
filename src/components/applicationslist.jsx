import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApplicationsList = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/applications/');
        setApplications(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) {
    return <p className="text-gray-500 text-center">Loading applications...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">Error: {error}</p>;
  }

  if (applications.length === 0) {
    return <p className="text-gray-500 text-center">No applications available</p>;
  }

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl">
        <thead className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
          <tr>
            <th className="py-3 px-6 text-left text-sm font-medium">Job Title</th>
            <th className="py-3 px-6 text-left text-sm font-medium">Company</th>
            <th className="py-3 px-6 text-left text-sm font-medium">Status</th>
            <th className="py-3 px-6 text-left text-sm font-medium">Date Applied</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id} className="border-b border-gray-200 transition-all duration-300 hover:bg-gray-100">
              <td className="py-4 px-6 text-sm font-medium">{application.job.jobTitle}</td>
              <td className="py-4 px-6 text-sm">{application.company_name}</td>
              <td
                className={`py-4 px-6 font-semibold text-sm ${
                  application.status === 'Pending'
                    ? 'text-yellow-600'
                    : application.status === 'Rejected'
                    ? 'text-red-600'
                    : 'text-green-600'
                }`}
              >
                {application.status}
              </td>
              <td className="py-4 px-6 text-sm text-gray-500">{new Date(application.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationsList;
