import React from 'react'
import "./components/Footer.css";

function Footer() {
  return (
    <div id='footer'>

      <div id="">
        <h3 id="top">Kwikserve.com</h3>
        <p>
          Kwikserve is a place where you can find any kind of artisan <br/>services your
           house or office may need.<br/>our services are affordable and fast. <br />
          {/* <br /> */}
          Copyright &copy; 2023 inferno all rights reserved.
        </p>
      </div>
      <div id="contact">
        <h3 id="top"> Contact Us</h3>
        Email:<a href="">Kwikserve@gmail.com</a>
        <br />
        Tel:+342-5324-9454
        <br />
        Address:2384 street,NYC.
      </div>
      <div id="socials">
        <h3 id="top">Socials</h3>
        <a href="#">Facebook</a><br />
        <a href="#">Twitter</a><br />
        <a href="#">Instagram</a>
      </div>

    </div>
  )
}

export default Footer