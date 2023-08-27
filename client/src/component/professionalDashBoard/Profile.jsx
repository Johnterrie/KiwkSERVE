import React, { useState } from 'react';


const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');


  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpdateInfo = () => {
    
  };

  return (
    <div className="all-profile">
      <h2 className="pg-text">Profile Page</h2>
      <div className="photo-upload-container">
        <h3>John Terry</h3>
        <p>@JT</p>
        
        {selectedFile && (
          <div className="uploaded-image">
            <img src={URL.createObjectURL(selectedFile)} alt="Uploaded" />
          </div>
        )}

        <label className="upload-label">
          Upload Photo
          <input type="file" onChange={handleFileSelect} style={{ display: 'none' }} />
        </label>
      </div>
          
      <div className="info-container">
          <h3>Edit Profile</h3>
          <div className="edit-bar">

        <div className="file">

          {/* <p className="dit">Edit Profile</p> */}

        </div>

        <div className="input-bar">

          <div className="first-input">

            <br /> <label className="label">Full Name</label> <br />

            <input type="text" placeholder="Full Name" className="details"   onChange={(e) => setFullName(e.target.value)}/><br /><br />

            <label className="label">Password</label><br />

            <input type="password" placeholder="*****" className="details" /><br /><br />

            <label className="label">Email Address</label><br />

            <input type="text" placeholder="Email Address" className="details" /><br /><br /><br />

            <button className="info">Update Info</button>

          </div>

          <div className="second-input">

            <br /><label className="label">Username</label><br />

            <input type="text" placeholder="Username" className="details" /><br /><br />

            <label className="label">Confirm Password</label><br />

            <input type="password" placeholder="*****" className="details" /><br /><br />

            <label className="label"> Confirm Email Address</label><br />

            <input type="text" placeholder=" Confirm Email Address" className="details" />

          </div>

        </div>

        </div>
         
          {/* <button onClick={handleUpdateInfo}>Update Info</button> */}
        </div>

    </div>
  );
};

export default Profile;
