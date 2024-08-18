import React from 'react'
import './Search.css'

const Search = ({ onSearch }) => {
    return (
        <input
            type="search"
            placeholder="Search widgets"
            onChange={onSearch}
            className='search-bar'
        />
    );
};

export default Search;