import React from 'react';
import './SearchBox.scss';

const SearchBox = (props) => {
  const {
    searchText,
    fuzzySearch,
    searchResultCount,
    searchTextChange,
    fuzzySearchChange,
  } = props;

  const searchResults =
    searchResultCount === 1
      ? 'Found 1 character'
      : searchResultCount > 1
      ? 'Found ' + searchResultCount + ' characters'
      : 'No match!';

  return (
    <div className='search-box'>
      <label htmlFor='searchBox'>By name:</label>
      <input
        type='text'
        id='searchBox'
        className='search-box__name-search'
        placeholder='Name to search'
        value={searchText}
        onChange={searchTextChange}
      />
      <label htmlFor='fuzzySearch'>Fuzzy search? </label>
      <input
        id='fuzzySearch'
        type='checkbox'
        className='search-box__fuzzy-ind'
        checked={fuzzySearch}
        onChange={fuzzySearchChange}
      />
      <p className='search-bar__results'>{searchResults}</p>
    </div>
  );
};

export default SearchBox;
