import React, {useState, useEffect} from 'react';
import { v4 as uuid} from 'uuid';
import Api from './Api';
import JobCard from './JobCard';
import SearchBar from './SearchBar';
import './JobsList.css';

function JobsList() {
    const [jobs, setJobs] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        getAllJobs();
    }, [toggle]);   

    const handleChange = (e) => {
        const {value} = e.target;
        setSearchTerm(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();        
        searchJobs();
    };
    
    const getAllJobs = async () => {
        const allJobs = await Api.getJobs();
        setJobs(allJobs);
    };

    const searchJobs = async () => {
        const search = await Api.searchJobs(searchTerm);
        setSearchTerm("");
        setJobs(search);
    };

    const handleApply = async (id) => {
        await Api.apply(id);
        setToggle(!toggle);
    }

    const toggleSearch = async () => {
        getAllJobs();
    };

    return (
        <div className="JobsList">
            <SearchBar toggleSearch={toggleSearch} page='jobs' handleChange={handleChange} handleSubmit={handleSubmit} searchTerm={searchTerm} />
            {jobs === undefined
                ? <p>Loading...</p>
                : jobs.length === 0 ? <p>Sorry, no results were found!</p> : jobs.map(job => (
                    <div key={uuid()}>
                        <JobCard handleApply={handleApply} job={job} />
                    </div>
                ))}
        </div>
    );
}

export default JobsList;