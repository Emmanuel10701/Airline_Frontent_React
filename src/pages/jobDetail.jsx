// src/components/JobDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import jobs from '../components/jobs'; // Adjust the path as necessary

const JobDetail = () => {
    const { id } = useParams();
    const job = jobs.find(job => job.id === id); // Assuming job.id is a string

    if (!job) {
        return <div>Job not found.</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{job.jobTitle}</h1>
            <p className="text-lg">{job.companyName}</p>
            <p>{job.description}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Contract Type:</strong> {job.contractType}</p>
            <p><strong>Requirements:</strong> {job.requirements}</p>
            <p><strong>Experience:</strong> {job.experience}</p>
            <p><strong>Contact:</strong> {job.email} | {job.phone}</p>
            <p><strong>Posted:</strong> {job.datePosted}</p>
            <p><strong>Work Type:</strong> {job.workType}</p>
        </div>
    );
};

export default JobDetail;
