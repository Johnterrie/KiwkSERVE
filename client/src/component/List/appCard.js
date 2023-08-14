import React from "react";
import "./appCard.css";
import man from "./person.jpg";
import { Link } from "react-router-dom";

const AppCard = (props) => {
  const {info} = props
  const {_id, name, email, location, phoneNumber, profession } = info
  console.log(info);

  return (
    <div key={_id} className="app-card">
      <div className="image-frame">
        <img className="image-lister" src={man} alt= "hello" />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <div className="inner-div">
          <div className="inner-div-left">
            <p>{email}</p>
            <p>{location}</p>
          </div>
          <div className="inner-div-right">
            <p>{phoneNumber}</p>
            <p>{profession}</p>
          </div>
        </div>
      </div>
      <Link to="/ratedProfessional">
        <button>View</button>
      </Link>
    </div>
  );
};

export default AppCard;
