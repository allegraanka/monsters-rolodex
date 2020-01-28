import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange}) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder} // set placeholder to whatever value you pass it in each instance
        onChange={handleChange} // set onChange to whatever handleChange is on each instance
    />
);