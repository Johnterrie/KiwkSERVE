import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faLanguage,
  faBell,
  faEnvelope,
  faInfoCircle,
  faShieldAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
  return (
    <div className="settings-container-page">
      <h2>Settings Page</h2>

      <Link to="/maintenance">
        <div className="settings-container">
          <div className="lefty-things">
            <FontAwesomeIcon icon={faBook} /> Terms and Condition
          </div>
        </div>
      </Link>

      <Link to="/maintenance">
        <div className="settings-container">
          <div className="lefty-things">
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </div>
        </div>
      </Link>

      <Link to="/maintenance">
        <div className="settings-container">
          <div className="lefty-things">
            <FontAwesomeIcon icon={faShieldAlt} /> Privacy
          </div>
        </div>
      </Link>

      <Link to="/maintenance">
        <div className="settings-container">
          <div className="lefty-things">
            <FontAwesomeIcon icon={faCalendarAlt} /> Date & time
          </div>
        </div>
      </Link>

      <Link to="/maintenance">
        <div className="settings-container">
          <div className="lefty-things">
            <FontAwesomeIcon icon={faLanguage} /> Language
          </div>
        </div>
      </Link>

      <Link to="/maintenance">
        <div className="settings-container">
          <div className="lefty-things">
            <FontAwesomeIcon icon={faEnvelope} /> Manage Notification
          </div>
        </div>
      </Link>

      <Link to="/maintenance">
        <div className="settings-container">
          <div className="lefty-things">
            <FontAwesomeIcon icon={faBell} /> Notification
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Settings;
