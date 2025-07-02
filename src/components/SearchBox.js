import React from 'react';

const SearchBox = ({ search, onSearch }) => (
  <input
    type="text"
    placeholder="Search by name or ID"
    value={search}
    onChange={onSearch}
    style={{ marginBottom: 10, padding: 5, width: '50%' }}
  />
);

export default SearchBox;