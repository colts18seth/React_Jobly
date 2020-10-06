import React from 'react';
import './CompanyCard.css';
import image from './imgs/download.png';

function CompanyCard({ company }) {
    return (
        <div className="CompanyCard">
            <img src={image} alt={company.handle + " logo"} />
            <h2>{company.name}</h2>

            <p>{company.description}</p>
        </div>
    );
}

export default CompanyCard;