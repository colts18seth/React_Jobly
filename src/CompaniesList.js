import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Api from './Api';
import CompanyCard from './CompanyCard';
import './CompaniesList.css';

function CompaniesList() {
    const [companies, setCompanies] = useState();

    useEffect(() => {
        const getCompanies = async () => {
            const allCompanies = await Api.getCompanies();
            setCompanies(allCompanies.companies)
        }
        getCompanies()
    }, [])

    return (
        <div className="CompaniesList">
            {companies === undefined
                ? <p>Loading...</p>
                : companies.map(company => (
                    <div key={uuid()}>
                        <CompanyCard company={company} />
                    </div>
                ))}
        </div>
    );
}

export default CompaniesList;