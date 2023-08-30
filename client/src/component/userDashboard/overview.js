import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Topbar from "./Top";


function Overview({user, pending, completed}) {
  return (
    <div className="App-ish">
      <div className="main">
          <Topbar user={user}/>
          <div>
      <section className="overview-container">
        <div className="short-width-container">
          <h1>{completed}</h1>
          <p>Completed</p>
        </div>

        <div className="short-width-container">
          <h1>{pending}</h1>
          <p>Pending</p>
        </div>
        

        <div className="short-width-container">
          <p>Rating</p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />{" "}
            <FontAwesomeIcon icon={faStar} />
          </p>
        </div>
      </section>
{/* 
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
      </section> */}
    </div>

      </div>
    </div>
  );
}

export default Overview;
