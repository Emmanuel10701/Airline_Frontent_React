import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FaDollarSign, FaEnvelope, FaPhoneAlt, FaBriefcase } from 'react-icons/fa';
import CircularProgress from '@mui/material/CircularProgress';

const JobList = () => {
    const [search, setSearch] = useState('');
    const [contractType, setContractType] = useState('');
    const [location, setLocation] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');
    const [datePosted, setDatePosted] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5;
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://127.0.0.1:8000/api/api/jobs/');
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const filteredJobs = jobs.filter(job => 
        job.job_title.toLowerCase().includes(search.toLowerCase()) &&
        (contractType ? job.work_type === contractType : true) &&
        (location ? job.location === location : true) &&
        (experienceLevel ? job.experience === experienceLevel : true) &&
        (datePosted ? moment().diff(moment(job.created_at), 'days') <= datePosted : true)
    );

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
            <div className="mb-4 mt-20 w-full max-w-md">
                <input 
                    type="text" 
                    placeholder="Search for jobs..." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className="border border-gray-300 rounded-full p-3 w-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-md hover:shadow-lg"
                />
            </div>

            {/* Filters */}
            <div className="hidden md:flex flex-wrap justify-center mb-4 w-full">
                <select
                    onChange={(e) => setContractType(e.target.value)}
                    className="border border-gray-300 rounded-full p-3 m-1 w-1/4 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                    <option className="text-gray-500" value="">All Contract Types</option>
                    <option className="text-blue-600" value="Hourly">Hourly</option>
                    <option className="text-orange-600" value="Temporary">Temporary</option>
                    <option className="text-green-600" value="Permanent">Permanent</option>
                    <option className="text-purple-600" value="Fixed">Fixed</option>
                </select>

                <select
                    onChange={(e) => setLocation(e.target.value)}
                    className="border border-gray-300 rounded-full p-3 m-1 w-1/4 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                    <option className="text-gray-500" value="">All Locations</option>
                    <option className="text-blue-600" value="Remote">Remote</option>
                    <option className="text-orange-600" value="On-site">On-site</option>
                    <option className="text-green-600" value="Hybrid">Hybrid</option>
                </select>

                <select
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    className="border border-gray-300 rounded-full p-3 m-1 w-1/4 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                    <option className="text-gray-500" value="">All Experience Levels</option>
                    <option className="text-blue-600" value="Junior">Junior</option>
                    <option className="text-yellow-600" value="Intermediate">Intermediate</option>
                    <option className="text-green-600" value="Senior">Senior</option>
                </select>

                <select
                    onChange={(e) => setDatePosted(e.target.value)}
                    className="border border-gray-300 rounded-full p-3 m-1 w-1/4 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                    <option className="text-gray-500" value="">All Dates</option>
                    <option className="text-blue-600" value="7">Last 7 Days</option>
                    <option className="text-green-600" value="30">Last 30 Days</option>
                    <option className="text-red-600" value="90">Last 90 Days</option>
                </select>

                <button
                    onClick={clearFilters}
                    className="m-1 inline-block bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full py-3 px-6 transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                    Clear Filters
                </button>
            </div>

            <div className="flex flex-wrap justify-center mb-4 w-full md:hidden">
                <select onChange={(e) => setContractType(e.target.value)} className="border rounded p-2 m-1 w-1/2">
                    <option value="">All Contract Types</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Temporary">Temporary</option>
                    <option value="Permanent">Permanent</option>
                    <option value="Fixed">Fixed</option>
                </select>
                <select onChange={(e) => setLocation(e.target.value)} className="border rounded p-2 m-1 w-1/2">
                    <option value="">All Locations</option>
                    <option value="Remote">Remote</option>
                    <option value="On-site">On-site</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
                <select onChange={(e) => setExperienceLevel(e.target.value)} className="border rounded p-2 m-1 w-1/2">
                    <option value="">All Experience Levels</option>
                    <option value="Junior">Junior</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Senior">Senior</option>
                </select>
                <select onChange={(e) => setDatePosted(e.target.value)} className="border rounded p-2 m-1 w-1/2">
                    <option value="">All Dates</option>
                    <option value="7">Last 7 Days</option>
                    <option value="30">Last 30 Days</option>
                    <option value="90">Last 90 Days</option>
                </select>
                <button onClick={clearFilters} className="border rounded px-4 py-2 bg-red-500 text-white m-1">
                    Clear Filters
                </button>
            </div>

            {loading && (
                <div className="flex justify-center mb-4">
                    <CircularProgress />
                </div>
            )}

            {filteredJobs.length === 0 && !loading && (
                <div className="text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-300 mb-4">
                    No jobs found related to your search and filters.
                </div>
            )}

            <div className="grid grid-cols-1 gap-8 w-full px-4 py-6">
                {currentJobs.map((job) => (
                    <div
                        key={job.id}
                        className="border rounded-lg p-6 bg-gradient-to-r from-blue-100 to-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-102"
                        style={{ width: '80%', margin: '0 auto' }}
                    >
                        <h2 className="text-3xl text-center font-bold text-blue-600 mb-2">{job.job_title}</h2>
                        <p className="text-xl text-purple-700 mb-1 font-semibold">{job.company_name}</p>
                        <p className="text-sm text-gray-600 mb-3">
                            <span className="font-bold">{job.work_type}</span> - {job.location}
                        </p>
                        <p className="text-gray-700 mb-2">{job.description}</p>
                        <p className="text-gray-600 mb-2">Requirements: {job.requirements}</p>

                        <div className="flex flex-wrap items-center justify-start space-x-4 mb-4">
                            <span className="flex items-center text-green-600 font-semibold space-x-1">
                                <FaDollarSign className="text-lg" />
                                <span>{job.salary}</span>
                            </span>
                            <span className="flex items-center text-blue-600 font-semibold space-x-1">
                                <FaEnvelope className="text-lg" />
                                <span>{job.email}</span>
                            </span>
                            <span className="flex items-center text-purple-600 font-semibold space-x-1">
                                <FaPhoneAlt className="text-lg" />
                                <span>{job.mobile}</span>
                            </span>
                        </div>

                        <Link
                            to={`/jobDetail/${job.id}`}
                            className="mt-2 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full py-3 px-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg"
                        >
                            Apply Now
                        </Link>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center mb-4">
    <button 
        onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)} 
        className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200 mx-1"
        disabled={currentPage === 1}
    >
        &lt;&lt; {/* Change to your desired icon or text */}
    </button>

    {Array.from({ length: totalPages }, (_, index) => (
        <button 
            key={index + 1} 
            onClick={() => handlePageChange(index + 1)} 
            className={`flex items-center justify-center w-10 h-10 rounded-full border mx-1 transition duration-200 ${
                currentPage === index + 1 
                    ? 'bg-blue-500 text-white border-blue-500' 
                    : 'bg-white text-blue-500 border-blue-300 hover:bg-blue-500 hover:text-white'
            }`}
        >
            {index + 1}
        </button>
    ))}

    <button 
        onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)} 
        className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200 mx-1"
        disabled={currentPage === totalPages}
    >
        &gt;&gt; {/* Change to your desired icon or text */}
    </button>
</div>

        </div>
    );
};

export default JobList;
