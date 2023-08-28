/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import img1 from "../Components/Images/tour-guide 1.jpg";
import img2 from "../Components/Images/travelling 1.jpg";
import img3 from "../Components/Images/hands 1.jpg";
import img4 from "../Components/Images/medical-team 1.jpg";

function Services() {
  return (
    <section className="section-white">
      <div>
        <h4 className="section-title">CATEGORY</h4>
        <h1 className="section-subtitle">We Offer Best Service</h1>
      </div>

      <div className="main-two">
        <div className="team-item">
          <img src={img1} alt="" />
          <h4>Guided Tours</h4>
          <p className="items">
            sunt qui repellat seape<br></br>quo velit aperiam id <br />
            aliquam placeat
          </p>
        </div>

        <div className="team-item2">
          <img src={img2} alt="" />
          <h4>Best Flights Options</h4>
          <p className="items">
            sunt qui repellat seape<br></br>quo velit aperiam id <br />
            aliquam placeat
          </p>
        </div>

        <div className="team-item3">
          <img src={img3} alt="" />
          <h4>Religious Tour</h4>
          <p className="items">
            sunt qui repellat seape<br></br>quo velit aperiam id <br />
            aliquam placeat
          </p>
        </div>

        <div className="team-item4">
          <img src={img4} alt="" />
          <h4>Medical Insurance</h4>
          <p className="items">
            sunt qui repellat seape<br></br>quo velit aperiam id <br />
            aliquam placeat
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
