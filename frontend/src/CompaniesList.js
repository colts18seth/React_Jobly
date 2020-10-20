import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Api from './Api';
import CompanyCard from './CompanyCard';
import SearchBar from './SearchBar';
import './CompaniesList.css';

function CompaniesList() {
    const [companies, setCompanies] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect(() => {
        getAllCompanies();
    }, []);

    const handleChange = (e) => {
        const {value} = e.target;
        setSearchTerm(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();        
        searchCompanies();
    };    
    
    const getAllCompanies = async () => {
        const allCompanies = await Api.getCompanies();
        setCompanies(allCompanies);
    }; 

    const searchCompanies = async () => {
        const search = await Api.searchCompanies(searchTerm);
        setSearchTerm("");
        setCompanies(search);
    };

    const toggleSearch = async () => {
        getAllCompanies();
    }

    return (
        <div className="CompaniesList">
            <SearchBar toggleSearch={toggleSearch} page='companies' handleChange={handleChange} handleSubmit={handleSubmit} searchTerm={searchTerm} />
            {companies === undefined
                ? <p>Loading...</p>
                : companies.length === 0 ? <p>Sorry, no results were found!</p> : companies.map(company => (
                    <div key={uuid()}>
                        <CompanyCard company={company} />
                    </div>
                ))}
        </div>
    );
}

export default CompaniesList;