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
        <div className="sidebar">
          <h2>Users Dashboard</h2>
          <div className="list">
            <h3>
              <FontAwesomeIcon icon={faHome} className="icon" />
              <Link to="/" style={{ textDecoration: 'none' }}>Overview</Link>
            </h3>
            <h3 className="book">
              <FontAwesomeIcon icon={faChartBar} className="icon" />
              <Link to="/bookings" style={{ textDecoration: 'none' }}>Book a Service</Link>
            </h3>
            <h3>
              <FontAwesomeIcon icon={faUsers} className="icon" />
              <Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link>
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