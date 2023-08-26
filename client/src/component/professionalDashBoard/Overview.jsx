import React from 'react';
import { faSearch, faBell, faStar } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Widget from './Widget';

const Overview = () => {
  return (
    <div>
      {/* <Widget title="Overview Widget" content="Overview Page Content" /> */}
      <div className="top-texts">
        <h3 className="overview-heading">Overview</h3> 
        <h5 className="top-sales-heading">Top Sales Representatives</h5>
      </div>
     
      <div className="search-bar">
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input type="text" placeholder="Search..." />
      </div>
      
      <div className="notification-icon">
          <FontAwesomeIcon icon={faBell} />
        </div>

        <section className="overview-container">
        <div className="short-width-container">
        <h3>5</h3>
        <p>Completed</p>
        </div>

        <div className="short-width-container">
        <h3>6</h3>
        <p>Pending</p>
        </div>

        <div className="short-width-container">
        <h3>Rating</h3>
        <p> <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} /></p>
        </div>
        </section>

        <section className="content-section">
          <div className="long-width-container">
          <p>Nicholas Patrick</p>
          <span className="inline-number">$2540.58</span>
          <h4 className="note">150 Products</h4>
          <h5 className="note">150 Premium</h5>
          <h6 className="note">+Gold</h6>
          <h3><button className="accept-button">Accept</button></h3> 
          <h2><button className="reject-button">Reject</button></h2>
  
        </div>
      </section>

      <section className="content-section">
          <div className="long-width-container">
          <p>Nicholas Patrick</p>
          <span className="inline-number">$2540.58</span>
          <h4 className="note">150 Products</h4>
          <h5 className="note">150 Premium</h5>
          <h6 className="note">+Gold</h6>
          <h3><button className="accept-button">Accept</button></h3> 
          <h2><button className="reject-button">Reject</button></h2>
  
        </div>
      </section>

     </div>
  );
};

export default Overview;

