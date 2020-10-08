import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';
import image from './imgs/download.png';

function CompanyCard({ company }) {
    return (
        <Link to={`/companies/${company.handle}`}>
            <div className="CompanyCard">
                <img src={image} alt={company.handle + " logo"} />
                <h2>{company.name}</h2>

                <p>{company.description}</p>
            </div>
        </Link>
    );
}

export default CompanyCard;