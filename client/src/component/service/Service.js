import React from 'react'
import Plumbers from "./213885-P07ZKE-271.jpg"
import Eletrician from "./electrician_03.jpg"
import HouseKeeper from "./52068.jpg"
import Painter from "./63506.jpg"
import Drycleaner from "./2150.jpg"

const Service = () => {
  return (
    <section className="section-white">
    <div>
      <h1 className="section-subtitle">Available Services</h1>
    </div>

    <div className="main-two">
      
      <div className="team-item">
        <img className="image-one" src={Eletrician} alt="hello" />
        <h4 className="headined">Eletricians</h4>
        <p className="items">
          find the Best Eletrician in your Area here
        </p>
      </div>

      <div className="team-item">
      <img className="image-one" src={Plumbers} alt="hello" />
        <h4 className="headined">Plumbers</h4>
        <p className="items">
        find the Best Plumber in your Area here
        </p>
      </div>

      <div className="team-item">
      <img className="image-one" src={HouseKeeper} alt="hello" />
        <h4 className="headined">House Keepers</h4>
        <p className="items">
          find available House Keeper in your Area here
        </p>
      </div>

      <div className="team-item">
        <img className="image-one" src={Painter} alt="" />
        <h4 className="headined">Painters</h4>
        <p className="items">
          Looking for a Painter? Look no further
        </p>
      </div>

      <div className="team-item">
      <img className="image-one" src={Drycleaner} alt="hello" />
        <h4 className="headined">Dry Cleaners</h4>
        <p className="items">
          The Best DryCleaners at your finger Tip
        </p>
      </div>

      
    </div>
  </section>
  )
}

export default Service
