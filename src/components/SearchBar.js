import React from 'react';

const SearchBar = props => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search..."
      onChange={event => props.onChange(event.target.value)}
      autoFocus
    />
  );
};

export default SearchBar;
