import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <div id='footer'>

      <div id="kwikserve" className='foot'>

        <h2 class="top">Kwikserve.com</h2>

        <p>
          Kwikserve is a place where you can find any kind<br/>of services your
          house or office may need.<br/>our services are affordable and fast. <br />
          Copyright &copy; 2023 inferno all rights reserved.
        </p>

      </div>

      <div id="contact" className='foot'>

        <h2 class="top"> Contact Us</h2>

        Email:<a href="">Kwikserve@gmail.com</a>

        <br />
        Tel:+342-5324-9454
        <br />
        Address:2384 street,NYC.

      </div>

      <div id="socials" className='foot'>

        <h2 class="top">Socials</h2>

        <a href="#">Facebook</a><br />

        <a href="#">Twitter</a><br />

        <a href="#">Instagram</a>
        
      </div>

    </div>
  )
}

export default Footer