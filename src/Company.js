import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from './Api';

function Company() {
    const { company } = useParams();
    const [companyState, setCompanyState] = useState();

    useEffect(() => {
        const gotCompany = Api.getCompany(company);
        gotCompany.then(res => {
            setCompanyState(res);
        })
    }, [company]);

    return (
        <div className="Company">
            <h1>companyState</h1>
        </div>
    );
}

export default Company;