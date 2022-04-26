import React from 'react';
import './SearchBox.scss';

const SearchBox = ({
  searchTerm,
  searchTermChangeHandler,
  searchResultCount,
}) => {
  let searchResultText = `Found ${searchResultCount} Pokemon`;
  return (
    <div className='search-box'>
      <label htmlFor='searchBox'>By name:</label>
      <input
        type='text'
        id='searchBox'
        className='search-box__name-search'
        placeholder='Name to search'
        onInput={searchTermChangeHandler}
        value={searchTerm}
      />
      <label htmlFor='fuzzySearch'>Fuzzy search? </label>{' '}
      <input
        id='fuzzySearch'
        type='checkbox'
        className='search-box__fuzzy-ind'
      />
      <p>{searchResultText}</p>
    </div>
  );
};

export default SearchBox;
