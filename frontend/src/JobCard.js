import React from 'react';
import Apply from './Apply';
import './JobCard.css';

function JobCard({ job, handleApply }) {
    return (
        <div className="JobCard">
            <h2>{job.title}</h2>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
            {!job.state ? 
                <Apply jobId={job.id} handleApply={handleApply} /> :
                <p className="alreadyApplied">Already applied!</p>
            }
        </div>
    );
}

export default JobCard;