import React from 'react';
import './SearchBar.css';

function searchBar({handleChange, handleSubmit, searchTerm, page, toggleSearch}) {    

    return (
        <form className='SearchBar' onSubmit={handleSubmit}>
            <input 
                onChange={handleChange} 
                value={searchTerm} 
                type='text' 
                placeholder='Enter Search Term...' 
            />
            <button type='submit'>
                Search
            </button>
            <button onClick={toggleSearch} type='button'>
                Show All
            </button>
        </form>
    );
}

export default searchBar;