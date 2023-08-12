import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import "./Header.css";
import image1 from "./construction-workers-sunset.jpg"
import image2 from "./car-being-taking-care-workshop.jpg"
import image3 from "./photo-mixed-race-boy-girl-classmates-watch-tutorial-video-together-laptop-computer.jpg"
import image4 from "./side-view-man-cleaning-shelf.jpg"
import image5 from "./worker-is-cutting-wires-with-lineman-s-pliers.jpg"


function Header() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='y'>
      <Carousel.Item className='x'>
        <img
          className="d-block w-100"
          src={image4}
          alt="First slide"
        />
        <Carousel.Caption className='caro'>
          <h1 className='title'>KWIKSERVE</h1>
          <p className='para'>Your Number One platform for Fast Quality Service</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='x'>
        <img
          className="d-block w-100"
          src={image3}
          alt="First slide"
        />
        <Carousel.Caption className='caro'>
          <h1 className='title'>KWIKSERVE</h1>
          <p className='para'>At kwikserve we are determined in providing the 
          best service to meet your need at the quickest possible time.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='x'>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption className='caro'>
          <h1 className='title'>KWIKSERVE</h1>
          <p className='para'>At kwikserve we are determined in providing the 
          best service to meet your need at the quickest time.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='x'>
        <img
          className="d-block w-100"
          src={image2}
          alt="First slide"
        />
        <Carousel.Caption className='caro'>
          <h1 className='title'>KWIKSERVE</h1>
          <p className='para'>Get Professional service providers around you </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='x'>
        <img
          className="d-block w-100"
          src={image5}
          alt="First slide"
        />
        <Carousel.Caption className='caro'>
          <h1 className='title'>KWIKSERVE</h1>
          <p className='para'>Is your Electrician disappointing you? Get a replacement Near you NOW!! </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='x'>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.f6c11973c5aa3ce0c9eea6958486b4aa?rik=kqQe%2bC9OYFRhuA&riu=http%3a%2f%2ffastconstruction.net%2fwp%2fwp-content%2fuploads%2f2015%2f12%2fafrican-construction-worker-painting-the-wall-000084330635_Double.jpg&ehk=M4Woov9An2xEllpdICZvBN4%2fcEli7BqzQwZBbpgk41I%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
          alt="Second slide"
        />

        <Carousel.Caption className='caro'>
          <h1 className='title'>KWIKSERVE</h1>
          <p className='para'>Get light speed available professionals near you</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;