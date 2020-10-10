import React, { useState, useEffect } from 'react';
import {v4 as uuid} from 'uuid';
import { useParams } from 'react-router-dom';
import Api from './Api';
import './Company.css';

function Company() {
    const { company } = useParams();
    const [companyState, setCompanyState] = useState("");

    useEffect(() => {
        const gotCompany = Api.getCompany(company);
        gotCompany.then(res => {
            setCompanyState(res);
        })
    }, [company]);

    return (
        <div className="Company">
            <h3>{companyState.name}</h3>
            <p>{companyState.description}</p>
            {companyState !== "" && 
            <div>{companyState.jobs.map(job => (
                <div className='job' key={uuid()}>
                    <h4>{job.title}</h4>
                        <p>Salary: {job.salary}</p>
                        <p>Equity: {job.equity}</p>

                        <button>Apply</button>
                </div>
            ))}
            </div>     
            }       
        </div>
    );
}

export default Company;