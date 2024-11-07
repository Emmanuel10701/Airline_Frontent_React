import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material'; // Import Material-UI spinner

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/applications/${id}`);
      // Filter out the deleted application from the state
      setApplications(applications.filter(application => application.id !== id));
    } catch (err) {
      setError('Error deleting application');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
        <p className="text-gray-500 ml-4">Loading applications...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
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
            <th className="py-3 px-6 text-left text-sm font-medium">Actions</th>
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
              <td className="py-4 px-6 text-sm text-center">
                <button
                  onClick={() => handleDelete(application.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationsList;
