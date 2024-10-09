import React from 'react';

const ClientsList = () => {
  // Dummy client data
  const clients = [
    {
      id: 1,
      clientName: 'John Doe',
      company: 'Tech Solutions',
      dateHired: '2024-05-10',
    },
    {
      id: 2,
      clientName: 'Jane Smith',
      company: 'InnovateX',
      dateHired: '2023-12-01',
    },
    {
      id: 3,
      clientName: 'Michael Johnson',
      company: 'GlobalSoft',
      dateHired: '2024-07-20',
    },
  ];

  if (clients.length === 0) {
    return <p className="text-gray-500 text-center">No clients available</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="py-3 px-6 text-left">Client Name</th>
            <th className="py-3 px-6 text-left">Company</th>
            <th className="py-3 px-6 text-left">Date Hired</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className="border-b border-gray-200">
              <td className="py-3 px-6">{client.clientName}</td>
              <td className="py-3 px-6">{client.company}</td>
              <td className="py-3 px-6 text-gray-500">{client.dateHired}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsList;
