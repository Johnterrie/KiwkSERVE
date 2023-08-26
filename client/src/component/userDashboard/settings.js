import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartBar, faCog, faUsers, faSearch, faComment,
   faBook, faInfoCircle, faShieldAlt, faCalendarAlt, faLanguage,
    faBell, faEnvelope,
 } from "@fortawesome/free-solid-svg-icons";
import profile from "./profile.jpg";
import { Link } from "react-router-dom";

function Settings() {
    return (
      <div className="App">
      <div className="main">
        <div className="sidebar">
          <h2>Users Dashboard</h2>
          <div className="list">
            <h3>
              <FontAwesomeIcon icon={faHome} className="icon"  />
              <Link to="/" style={{textDecoration:'none'}}>Overview</Link>
            </h3>
            <h3 className="book">
              <FontAwesomeIcon icon={faChartBar} className="icon"  />
              <Link to="/bookings" style={{textDecoration:'none'}}>Book a Service</Link>
            </h3>
            <h3>
              <FontAwesomeIcon icon={faUsers} className="icon"  />
              <Link to="/profile" style={{textDecoration:'none'}}>Profile</Link>
            </h3>
            <h3>
              <FontAwesomeIcon icon={faComment} className="icon" />
              <Link to="/comment" style={{ textDecoration: 'none' }}> Comment</Link>
            </h3>
            <h3>
              <FontAwesomeIcon icon={faCog} className="icon" />
              <Link to="/settings" style={{ textDecoration: 'none' }}>Settings</Link>
            </h3>
          </div>
        </div>

        <div className="main-bar">

          <div className="top-bar">
            <div className="bar">
              <input className="input" type="text" placeholder="Search" />
              <FontAwesomeIcon icon={faSearch} className="search" />
            </div>
            <div className="img">
              <img className="image" src={profile} alt="man" />
              <h4>Darasimi Ayoola</h4>
            </div>
          </div>

          <div class="page">
            <div className="set">
            <div className="sett">
              <p> <FontAwesomeIcon icon={faBook} className="icon" />Terms and Condition</p>
            </div>
            <div className="sett">
              <p> <FontAwesomeIcon icon={faInfoCircle} className="icon" />About</p>
            </div>
            <div className="sett">
              <p> <FontAwesomeIcon icon={faShieldAlt} className="icon" />Privacy</p>
            </div>
            <div className="sett">
               <p> <FontAwesomeIcon icon={faCalendarAlt} className="icon" />Date & Time </p>
            </div>
            <div className="sett">
              <p> <FontAwesomeIcon icon={faLanguage} className="icon" />Language</p>
            </div>
            <div className="sett">
              <p> <FontAwesomeIcon icon={faEnvelope} className="icon" />Manage Notification</p>
            </div>
            <div className="sett">
              <p> <FontAwesomeIcon icon={faBell} className="icon" />Notification</p>
            </div>
            </div>
            </div>
         
        </div>
        
      </div>
    </div>
    );
  }
  
  export default Settings;
  