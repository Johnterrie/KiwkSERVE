import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome, faChartBar, faCog, faUsers, faSearch, faComment,
} from "@fortawesome/free-solid-svg-icons";
import profile from "./profile.jpg";


const Top = ({user}) => {
  return (
    <div className="top-bar">
      <div className="bar">
        <input className="input" type="text" placeholder="Search" />
        <FontAwesomeIcon icon={faSearch} className="search" />
      </div>
      <div className="img">
        <img className="image" src={profile} alt="man" />
        <h4>{user.name}</h4>
      </div>
    </div>
  );
};

export default Top;
