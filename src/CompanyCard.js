import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';
import image from './imgs/download.png';

function CompanyCard({ company }) {
    return (
        <div className="CompanyCard">
            <Link to={`/companies/${company.handle}`}>            
            <img src={image} alt={company.handle + " logo"} />
            <h2>{company.name}</h2>
            <p>{company.description}</p>            
            </Link>
        </div>
    );
}

export default CompanyCard;