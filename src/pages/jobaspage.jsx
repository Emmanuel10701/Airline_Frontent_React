// src/components/JobList.js

import React, { useState } from 'react';
import jobs from '../components/jobs';
import Carousel from '../components/Carousel';
import moment from 'moment'; // Make sure to install moment
import { Link } from 'react-router-dom'; // For dynamic routing
import { FaDollarSign, FaEnvelope, FaPhoneAlt, FaBriefcase } from 'react-icons/fa'; // Install react-icons

const JobList = () => {
    const [search, setSearch] = useState('');
    const [contractType, setContractType] = useState('');
    const [location, setLocation] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');
    const [datePosted, setDatePosted] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5;

    // Filter jobs based on search criteria
    const filteredJobs = jobs.filter(job => 
        job.jobTitle.toLowerCase().includes(search.toLowerCase()) &&
        (contractType ? job.contractType === contractType : true) &&
        (location ? job.location === location : true) &&
        (experienceLevel ? job.experience === experienceLevel : true) &&
        (datePosted ? moment().diff(moment(job.datePosted), 'days') <= datePosted : true)
    );

    // Get current jobs for pagination
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const clearFilters = () => {
        setSearch('');
        setContractType('');
        setLocation('');
        setExperienceLevel('');
        setDatePosted('');
    };

    return (
        <div className="p-4">
            <Carousel />
            {/* Search Functionality */}
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="Search for jobs..." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className="border rounded p-2 w-full"
                />
            </div>

            {/* Filters */}
            <div className="flex space-x-4 mb-4">
                <select onChange={(e) => setContractType(e.target.value)} className="border rounded p-2">
                    <option value="">All Contract Types</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Temporary">Temporary</option>
                    <option value="Permanent">Permanent</option>
                    <option value="Fixed">Fixed</option>
                </select>
                <select onChange={(e) => setLocation(e.target.value)} className="border rounded p-2">
                    <option value="">All Locations</option>
                    <option value="Remote">Remote</option>
                    <option value="On-site">On-site</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
                <select onChange={(e) => setExperienceLevel(e.target.value)} className="border rounded p-2">
                    <option value="">All Experience Levels</option>
                    <option value="Junior">Junior</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Senior">Senior</option>
                </select>
                <select onChange={(e) => setDatePosted(e.target.value)} className="border rounded p-2">
                    <option value="">All Dates</option>
                    <option value="7">Last 7 Days</option>
                    <option value="30">Last 30 Days</option>
                    <option value="90">Last 90 Days</option>
                </select>
                <button onClick={clearFilters} className="border rounded px-4 py-2 bg-red-500 text-white">
                    Clear Filters
                </button>
            </div>

            {/* Job Listings */}
            <div className="grid grid-cols-1 gap-4">
                {currentJobs.map((job, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-lg font-bold">{job.jobTitle}</h2>
                        <p className="text-gray-700">{job.companyName}</p>
                        <p className="text-gray-500">{job.contractType} - {job.location}</p>
                        <p className="text-gray-600">{job.description}</p>
                        <p className="text-gray-600">Requirements: {job.requirements}</p>
                        <p className="text-gray-600">Experience: {job.experience}</p>
                        <div className="flex items-center space-x-2">
                            <span className="flex items-center text-gray-600"><FaDollarSign /> {job.salary}</span>
                            <span className="flex items-center text-gray-600"><FaEnvelope /> {job.email}</span>
                            <span className="flex items-center text-gray-600"><FaPhoneAlt /> {job.phone}</span>
                            <span className="flex items-center text-gray-600"><FaBriefcase /> {job.workType}</span>
                        </div>
                        <Link to={`/job/${job.id}`} className="mt-2 inline-block bg-blue-500 text-white rounded px-4 py-2">
                            Apply
                        </Link>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index} 
                        onClick={() => handlePageChange(index + 1)} 
                        className={`border rounded px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default JobList;
