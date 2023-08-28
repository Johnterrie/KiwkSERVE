// import { useState } from 'react';
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="section-one">
        <Carousel className="y">
          <Carousel.Item className="x">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="First slide"
            />
            <Carousel.Caption className="caro">
              <h1 className="title">
                Quality <span className="meet">Meets</span> Service
              </h1>
              <p className="para">
                At kwikserve we are determined in providing the best service to
                meet your need at the quickest time.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="x">
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/R.f6c11973c5aa3ce0c9eea6958486b4aa?rik=kqQe%2bC9OYFRhuA&riu=http%3a%2f%2ffastconstruction.net%2fwp%2fwp-content%2fuploads%2f2015%2f12%2fafrican-construction-worker-painting-the-wall-000084330635_Double.jpg&ehk=M4Woov9An2xEllpdICZvBN4%2fcEli7BqzQwZBbpgk41I%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
              alt="Second slide"
            />

            <Carousel.Caption className="caro">
              <h1 className="title">
                Quality <span className="meet">Meets</span> Service
              </h1>
              <p className="para">
                At kwikserve we are determined in providing the best service to
                meet your need at the quickest time.
              </p>
            </Carousel.Caption> 
          </Carousel.Item>
          <Carousel.Item className="x">
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/OIP.q_6PBaLLxd3M_dXO7AozDQHaEm?pid=ImgDet&rs=1"
              alt="Third slide"
            />

            <Carousel.Caption className="caro">
              <h1 className="title">
                Quality <span className="meet">Meets</span> Service
              </h1>
              <p id="para">
                At kwikserve we are determined in providing the best service to
                meet your need at the quickest time.
              </p>
            </Carousel.Caption> 
          </Carousel.Item>
        </Carousel>
      
        <Link to="allProfessional">
          <button className="btnsee">View all Professionals</button>
        </Link>
      </div>
    </>
  );
}

export default Header;
