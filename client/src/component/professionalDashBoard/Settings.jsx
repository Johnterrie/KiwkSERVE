import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLanguage, faBell, faEnvelope, faInfoCircle, faShieldAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';



const Settings = () => {
  return (
    <div className="settings-container-page">
      <h2>Settings Page</h2>
      <div className="settings-container">
        <h3>
          <FontAwesomeIcon icon={faBook} /> Terms and Condition
          </h3>
      </div>

      <div className="settings-container">
        <h3>
          <FontAwesomeIcon icon={faInfoCircle} /> About
          </h3>
      </div>

      <div className="settings-container">
        <h3>
          <FontAwesomeIcon icon={faShieldAlt} /> Privacy
          </h3>
      </div>

      <div className="settings-container">
        <h3>
          <FontAwesomeIcon icon={faCalendarAlt} /> Date & time
          </h3>
      </div>

      <div className="settings-container">
        <h3>
          <FontAwesomeIcon icon={faLanguage} /> Language
          </h3>
      </div>

      <div className="settings-container">
        <h3>
          <FontAwesomeIcon icon={faEnvelope} /> Manage Notification
          </h3>
      </div>

      <div className="settings-container">
        <h3>
          <FontAwesomeIcon icon={faBell} /> Notification
          </h3>
      </div>

      </div>
  ); 
};

export default Settings;

