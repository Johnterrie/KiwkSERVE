import React from "react";
import { faSearch, faBell, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Widget from './Widget';

const Overview = () => {
  return (
    <div>
       <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <p><FontAwesomeIcon icon={faSearch} /></p>
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
          <h3>6</h3>
          <p>Pending</p>
        </div>

        <div className="short-width-container">
          <h3>Rating</h3>
          <p>
            {" "}
            <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />{" "}
            <FontAwesomeIcon icon={faStar} />
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="long-width-container">
          <p>Nicholas Patrick</p>
          <span className="inline-number">$2540.58</span>
          <h4 className="note">150 Products</h4>
          <h5 className="note">150 Premium</h5>
        </div>
        <div>
          <button className="accept bttn"> Accept </button>
          <button className="reject bttn"> Reject </button>
        </div>
      </section>

      <section className="content-section">
        <div className="long-width-container">
          <p>Nicholas Patrick</p>
          <span className="inline-number">$2540.58</span>
          <h4 className="note">150 Products</h4>
          <h5 className="note">150 Premium</h5>
        </div>
        <div>
          <button className="accept bttn"> Accept </button>
          <button className="reject bttn"> Reject </button>
        </div>
      </section>
    </div>
  );
};

export default Overview;
