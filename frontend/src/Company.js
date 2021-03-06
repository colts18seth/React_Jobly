import React, { useState, useEffect } from 'react';
import {v4 as uuid} from 'uuid';
import { useParams } from 'react-router-dom';
import Api from './Api';
import './Company.css';

function Company() {
    const { company } = useParams();
    const [companyState, setCompanyState] = useState("");

    useEffect(() => {
        getCompany(company);
    }, [company]);

    const getCompany = async (company) => {
        const res = await Api.getCompany(company);        
        setCompanyState(res);
    };

    return (
        <div className="Company">
            <div className='title'>
                <h3>{companyState.name}</h3>
                <p>{companyState.description}</p>
            </div>
            {companyState !== "" && 
            <div>
                <h3 className="jobsHeading">Jobs</h3>
                {companyState.jobs.map(job => (
                <div className='job' key={uuid()}>
                    <h4>{job.title}</h4>
                        <p>Salary: {job.salary}</p>
                        <p>Equity: {job.equity}</p>
                </div>
            ))}
            </div>     
            }       
        </div>
    );
}

export default Company;