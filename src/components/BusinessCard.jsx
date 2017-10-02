import React from 'react';
import PropTypes from 'prop-types';

const BusinessCard = ({name, username, email, website, phone, company, hideBusinessCard}) => {

  const iconMapping = {username: 'face', email:'email', website:'link', phone:'phone'}

  return (
    <div className="card_container" onClick={hideBusinessCard}>
  
      <div className="card">
        <div className="card_content">
          <h1>{name}</h1>

          <div className="card_info">
            <ul className="card_user_info">
              {username && (
                <li>
                  <i className="material-icons">face</i>
                  <a>{username}</a>
                </li>
              )}

              {email && (
                <li>
                  <i className="material-icons">email</i>
                  <a>{email}</a>
                </li>
              )}

              {website && (
                <li>
                  <i className="material-icons">link</i>
                  <a>{website}</a>
                </li>
              )}

              {phone && (
                <li>
                  <i className="material-icons">phone</i>
                  <a>{phone}</a>
                </li>
              )}
            </ul>
            
            <div className="card_company_info">
              <h3>{company.name}</h3>
              <h4>{company.catchPhrase}</h4>
              <p>{company.bs}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  ); 
};

export default BusinessCard;

BusinessCard.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  company: PropTypes.object.isRequired,
  hideBusinessCard: PropTypes.func.isRequired,
};