import React from "react";
import "./profdashboard.css";
import { BsBarChartFill } from "react-icons/bs";
import {BsPeopleFill} from "react-icons/bs";
import {HiShoppingBag} from "react-icons/hi";
import {BsFillPersonFill} from "react-icons/bs";
import {IoMdSettings} from "react-icons/io";
import {BsFillBagFill} from "react-icons/bs";
import {BsFillPersonPlusFill} from "react-icons/bs";
import {VscError} from "react-icons/vsc";



function Profdashboard() {
  return (
    <div>
      <div className="side-bar">
        <div>
          <h3>Elvis Oparaji</h3>
          <p>My Dashbord</p>
        </div>
        <ul className="top">
          <li><BsBarChartFill/> Overview</li>
          <li><BsPeopleFill/> Customers</li>
          <li><HiShoppingBag/> Companies</li>
          <li><BsFillPersonFill/> Accounts</li>
          <li><IoMdSettings/> Settings</li>
          <li><BsFillBagFill/> Login</li>
          <li><BsFillPersonPlusFill/> Register</li>
          <li><VscError/> Error</li>
        </ul>
      </div>
    </div>
  );
}

export default Profdashboard;
