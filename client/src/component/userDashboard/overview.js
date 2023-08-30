import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome, faChartBar, faCog, faUsers, faSearch, faComment, faStar,
} from "@fortawesome/free-solid-svg-icons";
import profile from "./profile.jpg";
import { Link } from "react-router-dom";

function Overview() {
  return (
    <div className="App">
      <div className="main">
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

          <div class="over">
            <div className="boox">
              <div className="box">
                <h5 className="text">5</h5>
                <h6 className="text">Completed</h6>
              </div>
              <div className="box">
                <h5 className="text">5</h5>
                <h6 className="text">Completed</h6>
              </div>
              <div className="box">
                <h5 className="prof">Rate a Professional</h5>
                <FontAwesomeIcon icon={faStar} className="rate" />
              </div>
            </div>

            <div className="con">
            <h5>Shalewa Olajuwon</h5>
            <button className="btn">Active</button>
            </div>
            <div className="con">
             <h5 className="mail">Shalewa Olajuwon</h5>
            <span class="vertical-line"><h5 className="mail">Email</h5></span>
            <span class="vertical-line"><h5 className="mail">Plumber</h5></span>
            <button className="btn-one">Pending</button>
            </div>
            
          </div>

        </div>

      </div>
    </div>
  );
}

export default Overview;
