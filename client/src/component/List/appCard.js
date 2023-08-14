import React from "react";
import "./appCard.css";
import man from "./person.jpg";
import { Link } from "react-router-dom";

const AppCard = (props) => {
  const {
    imageSrc,
    companyName,
    companyAddress,
    companyDescription,
    phoneNumber,
    cityState,
  } = props;

  return (
    <div className="app-card">
      <div className="image-frame">
        <img className="image-lister" src={man} alt={companyName} />
      </div>
      <div className="info">
        <h2>{companyName}</h2>
        <div className="inner-div">
          <div className="inner-div-left">
            <p>{companyAddress}</p>
            <p>{companyDescription}</p>
          </div>
          <div className="inner-div-right">
            <p>{phoneNumber}</p>
            <p>{cityState}</p>
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
