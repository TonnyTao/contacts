import React from 'react';

const BusinessCard = ({name, username, email, website, phone, company, hideBusinessCard}) => {

  const iconMapping = {username: 'face', email:'email', website:'link', phone:'phone'}

  return (
    <div className="card_container" onClick={hideBusinessCard}>
  
      <div className="card">
        <div className="card_content">
          <h1>{name}</h1>

          <div className="card_info">
            <ul className="card_user_info">
              {username ? 
                <li>
                  <i className="material-icons">face</i>
                  <a>{username}</a>
                </li>
              : null}

              {email ? 
                <li>
                  <i className="material-icons">email</i>
                  <a>{email}</a>
                </li>
              : null}

              {website ? 
                <li>
                  <i className="material-icons">link</i>
                  <a>{website}</a>
                </li>
              : null}

              {phone ? 
                <li>
                  <i className="material-icons">phone</i>
                  <a>{phone}</a>
                </li>
              : null}
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