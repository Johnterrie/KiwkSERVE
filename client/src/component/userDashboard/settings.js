import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faInfoCircle,
  faShieldAlt,
  faCalendarAlt,
  faLanguage,
  faBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Topbar from "./Top";


function Settings({user}) {
  return (
    <div className="App">
      <div className="main">
          <Topbar user={user} />
        <div className="main-bar">

          <div class="page">
            <div className="set">
              <div className="sett">
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faBook} className="icon" />
                  Terms and Condition
                </p>
              </div>
              <div className="sett">
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                  About
                </p>
              </div>
              <div className="sett">
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faShieldAlt} className="icon" />
                  Privacy
                </p>
              </div>
              <div className="sett">
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                  Date & Time{" "}
                </p>
              </div>
              <div className="sett">
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faLanguage} className="icon" />
                  Language
                </p>
              </div>
              <div className="sett">
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  Manage Notification
                </p>
              </div>
              <div className="sett">
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faBell} className="icon" />
                  Notification
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
