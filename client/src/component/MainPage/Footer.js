import React from "react";
import "../MainPage/Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import footerbgimg from "../MainPage/footerbg.png";

function Footer() {
    return (
        <>
            <div class="section-footer">
                <div
                    class="footer"
                    style={{
                        backgroundImage: ` linear-gradient(to bottom, #000000be,#000000be), url(${footerbgimg})`,
                    }}
                >
                    <div className="secondnewsletter">
                        <h2 className="subtitle">Subscribe to our newsletter</h2>
                        <p>
                            Get regular update on our new services and new professionals
                            signed up with the specific
                            <br />
                            service they provide. we can also mail you special offers and
                            inform you about new features.
                        </p>

                        <div className="index-index">
                            <input type="text" placeholder="Enter email" className="email"></input>
                            <button className="btnsubscribe">Subscribe</button>
                        </div>
                    </div>
                </div>
                
                <div class="bottom footer">
                    <div class="innerfooter">
                        <div id="kwikserve" className="foot">
                            <h2 class="top">Kwikserve.com</h2>

                            <p>
                                Kwikserve is a place where you can find any kind
                                <br />
                                of services your house or office may need.
                                <br />
                                our services are affordable and fast. <br />
                                <br />
                                Copyright &copy; 2023 Kwikserve all rights reserved.
                            </p>
                        </div>
                        <div class="bro">
                            <h2>About</h2>
                            <ul>
                                <li>Menu</li>
                                <li>Features</li>
                                <li>Help & Supports</li>
                            </ul>
                        </div>

                        <div class="bro">
                            <h2>Socials</h2>
                            <ul>
                                <li><a href="#"><FaFacebook /> Facebook</a><br /></li>
                                <li><a href="#"><FaTwitter /> Twitter</a><br /></li>
                                <li><a href="#"><FaInstagram /> Instagram</a></li>
                            </ul>
                        </div>

                        <div class="bro">
                            <h2>Contact</h2>
                            <ul class="menu">
                                <li>+2347035695164</li>
                                <li>kwikserve@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
