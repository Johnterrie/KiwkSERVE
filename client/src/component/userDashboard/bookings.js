import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome, faChartBar, faCog, faUsers, faSearch, faComment,
} from "@fortawesome/free-solid-svg-icons";
import profile from "./profile.jpg";
import { Link } from "react-router-dom";

function Bookings() {
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

          <div class="booking">
            <div className="card">
              <img className="card-image" src={profile} alt="man" />
              <p classname="service">Adewunmi Isabella</p>
              <p classname="service">Electrician</p>
              <p classname="service">Island</p>
              <button>Book Service</button>
            </div>
            <div className="card">
              <img className="card-image" src={profile} alt="man" />
              <p classname="service"> Adeyemi Kofoworola</p>
              <p classname="service">Fashion Designer</p>
              <p classname="service">Bariga</p>
              <button>Book Service</button>
            </div>
            <div className="card">
              <img className="card-image" src={profile} alt="man" />
              <p classname="service"> Ayoade Ololade</p>
              <p classname="service">Mechanic</p>
              <p classname="service">Oshodi</p>
              <button>Book Service</button>
            </div>
            <div className="card">
              <img className="card-image" src={profile} alt="man" />
              <p classname="service"> Ayowole Jayeola</p>
              <p classname="service">Plumber</p>
              <p classname="service">Ilorn</p>
              <button>Book Service</button>
            </div>
            <div className="card">
              <img className="card-image" src={profile} alt="man" />
              <p classname="service"> Dauda Greatest</p>
              <p classname="service">Electrician</p>
              <p classname="service">Ayobo</p>
              <button>Book Service</button>
            </div>
            <div className="card">
              <img className="card-image" src={profile} alt="man" />
              <p classname="service"> Titilayo Maurice</p>
              <p classname="service">Mechanic</p>
              <p classname="service">Ilupeju</p>
              <button>Book Service</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Bookings;
