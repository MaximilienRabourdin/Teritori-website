import React from 'react';


// Router -> import Link
import { Routes, Route } from 'react-router-dom';

const SearchBar: React.FC<{ 
    formSubmit : string,
    value: string,
    handleSearchKey: string, 
    clearSearch: string }> = () => { 
  return (
    <div className="searchBar-wrap">
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Go</button>
    </form>
    </div>
  );
}

export default SearchBar;
