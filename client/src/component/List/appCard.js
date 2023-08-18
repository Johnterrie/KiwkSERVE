import React from "react";
import "./appCard.css";
import man from "./person.jpg";
import { Link } from "react-router-dom";

const AppCard = (props) => {
  const {info} = props
  const {_id, name, email, location, Phone, Profession, rating, image } = info
  console.log(info);

  return (
    <div key={_id} className="app-card">
      <div className="image-frame">
        <img className="image-lister" src={man} alt= "hello" />
      </div>


      <div className="info">
        <h2 className="rara">{name}</h2>


        <div className="inner-div">

          <div className="inner-div-left">
            <h5>{Profession}</h5>
          </div>
          
          <div className="inner-div-right">
            <p className="paragrara">{email}</p>
            <p className="paragrara">{location}</p>
            <p className="paragrara">{Phone}</p>
          </div>

        </div>
      </div>
      <Link to="/usersignup">
        <button className="viewBtn">View</button>

      </Link>
    </div>
  );
};

export default AppCard;
