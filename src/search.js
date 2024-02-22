import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import info from './info.json';

const Search = () => {
  const [searchItem, setSearchItem] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearchSubmit = () => {
    const result = info.find(product => product.name.toLowerCase() === searchItem.toLowerCase());
    if (result) {
      setSearchResult(result);
    } else {
      setSearchResult(null);
      alert('No items found');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type='text'
        placeholder='Search Products'
        value={searchItem}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchSubmit}>Search</button>
      {searchResult && (
        <div>
          <p>Go to <Link to={searchResult.url} style={{ color: 'black' }}>{searchResult.name}</Link> page</p>
        </div>
      )}
    </div>
  );
};

export default Search;

