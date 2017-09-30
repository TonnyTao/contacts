import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const {target, isLoading, selectedContact} = props;

  const readonly = (isLoading || selectedContact.id) ? {readOnly:true} : {};

  return (
    <div className="search_bar">
      
      <input 
        type="text"
        value={target}
        onChange={ (event) => {
            props.filterList(event.target.value)
        }}
        {...readonly}
      />

    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  target: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  selectedContact: PropTypes.object.isRequired,
};