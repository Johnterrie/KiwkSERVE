import React from 'react';
import './appCard.css';
import man from './person.jpg';


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
        <img src={man} alt={companyName} />
      </div>
      <div className="info">
        <h2>{companyName}</h2>
        <p>{companyAddress}</p>
        <p>{companyDescription}</p>
        <p>{phoneNumber}</p>
        <p>{cityState}</p>
        <div className="button-container">
          <button>View</button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
