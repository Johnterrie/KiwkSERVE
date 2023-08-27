import React from 'react'
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import footerbgimg from "../MainPage/footerbg.png"

function Footer() {
  return (
    <>
<div class="section-footer">
          <div class="footer" style={{backgroundImage:` linear-gradient(to bottom, #000000be,#000000be), url(${footerbgimg})`}}>
            
            <div className='secondnewsletter'>
                <h2 className='subtitle'>Subscribe to our newsletter</h2>
                <p>
                  Get regular update on our new services and new professionals signed up with the specific<br/>
                  service they provide. we can also mail you special offers and inform you about new features.
                  <br/><input type="text" id="lname" name="lname" placeholder='Enter email' className='input'></input>
                  <button className='btnsubscribe'>Subscribe</button>
                </p>
            </div>
        </div>
        <div class="bottom footer" >
            <div class="innerfooter">

              <div id="kwikserve" className='foot'>

                <h2 class="top">Kwikserve.com</h2>
                
                <p>
                  Kwikserve is a place where you can find any kind<br/>of services your
                  house or office may need.<br/>our services are affordable and fast. <br />
                  <br />Copyright &copy; 2023 inferno all rights reserved.
                </p>
                
              </div>
              
                  <div class="about details">
                    <h2>About</h2>
                    <ul class="menu">
                        <li>Menu</li>
                        <li>Features</li>
                        <li>Help & Supports</li>
                    </ul>
                  </div>
                  <div class="about details">
                    <h2>Socials</h2>
                    <ul class="menu">
                        <li><a href="#"><FaFacebook/> Facebook</a><br /></li>
                        <li><a href="#"><FaTwitter/> Twitter</a><br/></li>
                        <li><a href="#"><FaInstagram/> Instagram</a></li>
                    </ul>
                  </div>
                  <div class="about details">
                    <h2>Contact Us</h2>
                    <ul class="menu">
                        {/* <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li> */}
                        <li>+2347035695164</li>
                        <li>kwikserve@gmail.com</li>
                    </ul>
                  </div>
                
            </div>
        </div>
    </div>



      {/* <div className='containerfooter'>
        <div className='secondnewsletter'>
          <h2 className='subtitle'>Subscribe to our newsletter</h2>
          <p>
          Get regular update on our new services and new professionals signed up with the specific<br/>
          service they provide. we can also mail you special offers and inform you about new features.
          <br/><input type="text" id="lname" name="lname" className='input'></input>
          <button className='btnsubscribe'>Subscribe</button>
          </p>
        </div>

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

            Email:<a href=""> Kwikserve@gmail.com</a>

            <br />
            Tel: +2347035695164
            <br />
            Address: Lagos,Nigeria.

          </div>

          <div id="socials" className='foot'>

            <h2 class="top">Socials</h2>

            <a href="#"><FaFacebook/> Facebook</a><br />

            <a href="#"><FaTwitter/> Twitter</a><br/>

            <a href="#"><FaInstagram/> Instagram</a>
        
          </div>

        </div>
      </div>
     */}
    </>
  )
}

export default Footer