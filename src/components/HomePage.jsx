import React from 'react';

import SearchBar from './SearchBar';
import ReactLoading from 'react-loading'
import PropTypes from 'prop-types';

import BusinessCard from './BusinessCard'
import {ORDER_DEFAULT, ORDER_DESC, ORDER_ASC} from '../constants/orders';

const HomePage = ({contacts, target, isLoading, selectedContact, order, actions}) => {

  let itemsToShow = target=="" ? contacts : contacts.filter(item => item.name.startsWith(target));
  
  const statistic = itemsToShow.reduce((result, {name}) => {
    const firstLetter = name.substr(0, 1).toUpperCase();
    result[firstLetter] = (result[firstLetter] || 0) + 1;
    return result;
  }, {});
  
  itemsToShow = sort(itemsToShow, order);

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

      { isLoading && <ReactLoading type="bubbles" delay={0} color="#444" /> }
      
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

      {itemsToShow.length>1 && (
        <a className="sort" onClick={actions.sortList}>
          <i className="material-icons">sort_by_alpha</i>
        </a>
      )}

      <p className="statistic">{statisticText}</p>

      { selectedContact.id && <BusinessCard hideBusinessCard={actions.hideBusinessCard} {...selectedContact} /> }
    </div>
  );
};

function sort(array, order) {
  if (order == ORDER_DEFAULT) return array

  return [...array].sort((a, b) => {
    const text1 = `${a.name}${a.company.name}`.toUpperCase();
    const text2 = `${b.name}${b.company.name}`.toUpperCase();

    if (text1 == text2 ) return 0;

    if (order == ORDER_ASC) {
      return -(text1 < text2 ? 1 : -1)
    }else {
      return -(text1 > text2 ? 1 : -1)
    }
  });
}

export default HomePage;

HomePage.propTypes = {
  contacts: PropTypes.array.isRequired,
  target: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  selectedContact: PropTypes.object.isRequired,
  order: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};