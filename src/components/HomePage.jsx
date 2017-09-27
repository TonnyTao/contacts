import React from 'react';

import SearchBar from './SearchBar';
import ReactLoading from 'react-loading'

import BusinessCard from './BusinessCard'

const HomePage = ({contacts, target, actions, isLoading, selectedContact}) => {

  const itemsToShow = target=="" ? contacts : contacts.filter(item => item.name.startsWith(target));

  const statistic = itemsToShow.reduce((result, {name}) => {
    const firstLetter = name.substr(0, 1).toUpperCase();
    result[firstLetter] = (result[firstLetter] || 0) + 1;
    return result;
  }, {});

  const statisticText = Object.entries(statistic).reduce((result, [key, value])=>{
    result += `${value}个${key}  `;
    return result
  }, "")

  return (
    <div className="container">
      <h2>My Contacts</h2>

      <SearchBar 
        target={target}
        filterList={actions.filterList}
        isLoading={isLoading}
        selectedContact={selectedContact} 
      />

      { isLoading ? <ReactLoading type="bubbles" delay="0" color="#444" /> : null}
      
      <ul className="contacts_list">
          {itemsToShow.map((contact) => {
            let itemClick = actions.showBusinessCard.bind(this, contact);

            return (
              <li 
                key={contact.id}
                data={contact}
                onClick={itemClick} 
              >
                {contact.name} - {contact.company.name}
              </li>
            )
          })}
      </ul>

      <p className="statistic">{statisticText}</p>

      { selectedContact.id ? <BusinessCard hideBusinessCard={actions.hideBusinessCard} {...selectedContact} /> : null}
    </div>
  );
};

export default HomePage;
