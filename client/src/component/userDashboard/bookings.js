import React from "react";
import profile from "./profile.jpg";

import Topbar from "./Top";
import Professional from "../professionalSignUp/Professional";

function Bookings({ user, professionals }) {
  console.log(professionals);

  return (
    <div className="App-ish">
      <div className="main">
        <div className="main-bar">
          <Topbar user={user} />

          <div class="booking">
            {professionals.map((data) => {
              return (
                <div className="card">
                  <img className="card-image" src={profile} alt="man" />
                  <p classname="service">{data.name}</p>
                  <p classname="service">{data.phoneNumber}</p>
                  <p classname="service">{data.profession}</p>
                  <p classname="service">{data.location}</p>
                  <button>Book Service</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookings;
