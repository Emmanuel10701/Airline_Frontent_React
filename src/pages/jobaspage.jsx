// src/components/JobList.js

import React from 'react';
import jobs from '../components/jobs';

const JobList = () => {
    return (
        <div>
            <h1>Job Listings</h1>
            <div className="job-list">
                {jobs.map((job, index) => (
                    <div key={index} className="job-item">
                        <img src={job.logo} alt={`${job.companyName} logo`} />
                        <h2>{job.jobTitle}</h2>
                        <p>{job.companyName}</p>
                        <p>{job.contractType} - {job.location}</p>
                        <p>{job.description}</p>
                        <p>Requirements: {job.requirements}</p>
                        <p>Experience: {job.experience}</p>
                        <p>Salary: {job.salary}</p>
                        <p>Contact: {job.email} | {job.phone}</p>
                        <p>Work Type: {job.workType}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobList;
