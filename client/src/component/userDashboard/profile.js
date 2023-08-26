import React, { useState } from 'react';
import profile from "./profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome, faChartBar, faCog, faUsers, faSearch, faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fullName, setFullName] = useState("");
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const submit = async (e) =>{
    e.preventDefault();
  }

  return (
    <div className="App">
      <div className="main">
        <div className="sidebar">
          <h2>Users Dashboard</h2>
          <div className="list">
            <h3>
              <FontAwesomeIcon icon={faHome} className="icon" />
              <Link to="/" style={{ textDecoration: 'none' }}>Overview</Link>
            </h3>
            <h3 className="book">
              <FontAwesomeIcon icon={faChartBar} className="icon" />
              <Link to="/bookings" style={{ textDecoration: 'none' }}>Book a Service</Link>
            </h3>
            <h3>
              <FontAwesomeIcon icon={faUsers} className="icon" />
              <Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link>
            </h3>
            <h3>
              <FontAwesomeIcon icon={faComment} className="icon" />
              <Link to="/comment" style={{ textDecoration: 'none' }}> Comment</Link>
            </h3>
            <h3>
              <FontAwesomeIcon icon={faCog} className="icon" />
              <Link to="/settings" style={{ textDecoration: 'none' }}>Settings</Link>
            </h3>
          </div>
        </div>

        <div className="main-bar">

          <div className="top-bar">
            <div className="bar">
              <input className="input" type="text" placeholder="Search" />
              <FontAwesomeIcon icon={faSearch} className="search" />
            </div>
            <div className="img">
              <img className="image" src={profile} alt="man" />
              <h4>Darasimi Ayoola</h4>
            </div>
          </div>

          <div class="profile">
            <div className="picture-bar">
              <p className="name">Olajuwon Adeola</p>
              <p className="email">adeola2345@gmail.com</p>
              <img src={(selectedFile)} alt="Uploaded" className="profile-picture"/>
              <button className="photo"  >Upload Photo</button>
              {/* onClick={(e) => alert("Uploaded Successfully")} */}
          <input type="file" onChange={handleFileSelect} style={{ display: 'none' }} className="photo" />
            </div>

            <div className="edit-bar">
              <div className="file">
                <p className="dit">Edit Profile</p>
              </div>

              <div className="input-bar">
                <div className="first-input">

                  <br /><label className="label">Full Name</label><br />
                  <input type="text" placeholder="Full Name" className="details" value={fullName}
                   onChange={(e) => setFullName(e.target.value)}/><br /><br />

                  <label className="label">Password</label><br />
                  <input type="password" placeholder="*****" className="details" 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}/><br /><br />

                  <label className="label">Email Address</label><br />
                  <input type="text" placeholder="Email Address" className="details" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/><br /><br /><br />

                  <button className="info" onClick={(e) => alert("Updated Successfully")} >Update Info</button>
                  
                </div>

                <div className="second-input">
                  <br /><label className="label">Username</label><br />
                  <input type="text" placeholder="Username" className="details" 
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}/><br /><br />
                  <label className="label">Confirm Password</label><br />
                  <input type="password" placeholder="*****" className="details" 
                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}/><br /><br />
                  <label className="label"> Confirm Email Address</label><br />
                  <input type="text" placeholder=" Confirm Email Address" className="details" 
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
