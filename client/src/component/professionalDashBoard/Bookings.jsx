import React from 'react';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons'; // Import the bell icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Widget from './Widget';

const Bookings = () => {
  return (
    <div>
      {/* <Widget title="Overview Widget" content="Overview Page Content" /> */}
      <div className="top-texts">
        <h3 className="overview-heading">Bookings</h3> 
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

        <section className="content-section">
          <div className="long-width-container">
          <p>Nicholas Patrick</p>
          <span className="inline-number">$2540.58</span>
          <h4 className="note">150 Products</h4>
          <h5 className="note">150 Premium</h5>
          <h6 className="note">+Gold</h6>
        </div>
      </section>

      <section className="content-section">
          <div className="long-width-container">
          <p>Kylian Mbappe</p>
          <span className="inline-number">$2540.58</span>
          <h4 className="note">150 Products</h4>
          <h5 className="note">150 Premium</h5>
          <h6 className="note">+Gold</h6>
        </div>
      </section>

      <section className="content-section">
          <div className="long-width-container">
          <p>Cristiano Ronaldo</p>
          <span className="inline-number">$2540.58</span>
          <h4 className="note">150 Products</h4>
          <h5 className="note">150 Premium</h5>
          <h6 className="note">+Gold</h6>
        </div>
      </section>

      <section className="content-section">
          <div className="long-width-container">
          <p>Leo Messi</p>
          <span className="inline-number">$2540.58</span>
          <h4 className="note">150 Products</h4>
          <h5 className="note">150 Premium</h5>
          <h6 className="note">+Gold</h6>
        </div>
      </section>
    </div>
  );
};

export default Bookings;


