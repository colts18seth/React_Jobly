import React from 'react';

function CompanyCard({ company }) {
    return (
        <div className="CompanyCard">
            <h1>{company.name}</h1>
        </div>
    );
}

export default CompanyCard;