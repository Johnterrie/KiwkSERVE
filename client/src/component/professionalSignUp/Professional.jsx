import React, { useState } from "react";
import axios from "axios";
import List from "../List/App";
import Card from "../card/component/App"
import { Link } from "react-router-dom";



const Professional = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState("");
  const [address, setAddress] = useState("");
  const [confirm, setConfirm] = useState("");
  const [CheckConfirmPassword, setCheckConfirmPassword] = useState("");
  const [myLocation, setMyLocation] = useState("");
  const [profession, setProfession] = useState("");
  const [response, setResponse] = useState(false);
  const [data, setData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      pass.trim() === "" ||
      phone.trim() === "" ||
      myLocation.trim() === "" ||
      profession.trim() === ""
    ) {
      setError("Please fill all the Fields");
    } else {
      setSuccess("sign up successfully");
    }

    if (pass !== confirm) {
      setCheckConfirmPassword("Password do not Match");
    }

    try {
      const response = await axios
        .post("http://localhost:8080/signupprofessional", {
          fullName: name,
          email: email,
          password: pass,
          phoneNumber: phone,
          location: myLocation,
          profession: profession,
        })
        .then((response) => response.data);
      setResponse(true);
      setData(response);
      console.log("form submitted Successfully");
    } catch (e) {
      console.log("Error: " + e.message);
    }
  };

  const handleChange = (e) => {
    setMyLocation(e.target.value);
  };

  const changeData = (e) => {
    setProfession(e.target.value);
  };

  const loginPage = (e) => {
    return (
      <div>
        <div className="auth-form-container">
          <h2 className="reg-text">Professional Sign Up</h2>
          <form className="professional-form" onSubmit={handleSubmit}>
            <label htmlFor="First Name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your full name..."
              id="First Name"
              name="First Name"
            />
            <label htmlFor="email">Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email address..."
              id="email"
              name="email"
            />
            <label htmlFor="password">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Enter your password..."
              id="password"
              name="password"
            />
            <label htmlFor="password">Confirm Password</label>
            <input
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              type="password"
              placeholder="Confirm your password..."
              id="Confirm password"
              name="Confirm password"
            />
            <label htmlFor="phone number">Phone Number</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="phone number"
              placeholder="Phone number..."
              id="phone number"
              name="phone number"
            />
            <label htmlFor="Address">Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="Address"
              placeholder="Address..."
              id="Address"
              name="Address"
            />
            <label htmlFor="Practice field">Profession</label>
            <select className="lll" value={profession} onChange={changeData}>
              <option>Select profession...</option>
              <option value="Mechanic">Mechanic</option>
              <option value="Plumber">Plumber</option>
              <option value="Electrician">Electrician</option>
              <option value="House Keeper">House Keeper</option>
              <option value="Vulcanizer">Vulcanizer</option>
              <option value="Painter">Painter</option>
              <option value="Car Wash">Car Wash</option>
              <option value="Tiler">Tiler</option>
              <option value="Barber">Barber</option>
              <option value="Laundry Services">Laundry Services</option>
            </select>
            <label htmlFor="Practice field">Location</label>
            <select className="lll" value={myLocation} onChange={handleChange}>
              <option className="sel-locate">Select location...</option>
              <option value="ikoyi">ikoyi</option>
              <option value="Gbagada">Gbagada</option>
              <option value="Lekki">Lekki</option>
              <option value="Ajah">Ajah</option>
              <option value="Shomolu">Shomolu</option>
              <option value="Ketu">Ketu</option>
              <option value="Ikeja">Ikeja</option>
              <option value="Ajegunle">Ajegunle</option>
              <option value="Ikorodu">Ikorodu</option>
              <option value="Oshodi">Oshodi</option>
              <option value="Surulere">Surulere</option>
            </select>

            <Link to="/professionaldashboard" >
            <button type="submit">Sign up</button>
            </Link>

            <div
              className="link-btn"
              onClick={() => props.onFormSwitch("login")}
            >
              Already have an account? Login here.
            </div>
          </form>
        </div>
      </div>
    );
  };

  
  console.log(data)
  return (
    <div>
        { response ? <Card list={data}/> : loginPage()}
    </div>
  );
};

export default Professional;
