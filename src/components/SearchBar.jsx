import React from 'react';

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