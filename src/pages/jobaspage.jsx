import React, { useState } from 'react';
import jobs from '../components/jobs';
import Carousel from '../components/Carousel';
import moment from 'moment'; // Make sure to install moment
import { Link } from 'react-router-dom'; // For dynamic routing
import { FaDollarSign, FaEnvelope, FaPhoneAlt, FaBriefcase } from 'react-icons/fa'; // Install react-icons
import CircularProgress from '@mui/material/CircularProgress'; // Import Material UI spinner

const JobList = () => {
    const [search, setSearch] = useState('');
    const [contractType, setContractType] = useState('');
    const [location, setLocation] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');
    const [datePosted, setDatePosted] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5;
    const [loading, setLoading] = useState(false); // Loading state

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
        <div className="p-4 flex flex-col items-center">
            <Carousel />
            {/* Search Functionality */}
            <div className="mb-4 mt-20 w-full max-w-md">
                <input 
                    type="text" 
                    placeholder="Search for jobs..." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className="border rounded p-2 w-full"
                />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center mb-4 w-full">
                <select onChange={(e) => setContractType(e.target.value)} className="border rounded p-2 m-1 w-1/2 sm:w-1/3 md:w-1/4">
                    <option value="">All Contract Types</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Temporary">Temporary</option>
                    <option value="Permanent">Permanent</option>
                    <option value="Fixed">Fixed</option>
                </select>
                <select onChange={(e) => setLocation(e.target.value)} className="border rounded p-2 m-1 w-1/2 sm:w-1/3 md:w-1/4">
                    <option value="">All Locations</option>
                    <option value="Remote">Remote</option>
                    <option value="On-site">On-site</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
                <select onChange={(e) => setExperienceLevel(e.target.value)} className="border rounded p-2 m-1 w-1/2 sm:w-1/3 md:w-1/4">
                    <option value="">All Experience Levels</option>
                    <option value="Junior">Junior</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Senior">Senior</option>
                </select>
                <select onChange={(e) => setDatePosted(e.target.value)} className="border rounded p-2 m-1 w-1/2 sm:w-1/3 md:w-1/4">
                    <option value="">All Dates</option>
                    <option value="7">Last 7 Days</option>
                    <option value="30">Last 30 Days</option>
                    <option value="90">Last 90 Days</option>
                </select>
                <button onClick={clearFilters} className="border rounded px-4 py-2 bg-red-500 text-white m-1">
                    Clear Filters
                </button>
            </div>

            {/* Loading Spinner */}
            {loading && (
                <div className="flex justify-center mb-4">
                    <CircularProgress />
                </div>
            )}

            {/* Job Listings */}
            <div className="grid grid-cols-1 gap-4 w-full">
                {currentJobs.map((job) => (
                    <div key={job.id} className="border rounded-lg p-4 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
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
                        <Link to={`/jobDetail/${job.id}`} className="mt-2 inline-block bg-blue-500 text-white rounded px-4 py-2">
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
