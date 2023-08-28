import React from "react";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons"; // Import the bell icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Widget from './Widget';

const Bookings = () => {
  return (
    <div>
      <div className="top-texts">
        <h3 className="overview-heading">Bookings</h3>
      </div>



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

export default Bookings;
