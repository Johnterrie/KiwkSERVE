import { useState } from "react";
import axios from 'axios';


function Professional() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("Location");
  const [profession, setProfession] = useState("");
  const [image, setImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [yearsofexperience, setYearsofexperience] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [checkCheckConfirmPassword, setCheckConfirmPassword] = useState("")


  const submit = async (e) =>{
    e.preventDefault();

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      password.trim() === "" ||
      email.trim() === ""||
      location.trim()=== ""||
      profession.trim()=== "" ||
      image.trim() === "" ||
      phoneNumber.trim() === "" ||
      yearsofexperience.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError("Please fill in all fields.");
      return;
    } 
    if (password !== confirmPassword) {
      setCheckConfirmPassword("Password do not Match")
    }
    else {
      setSuccess("Sign Up Successfully!");
    }

    try {
      await axios.post("http://localhost:5000/signUpProfessional", {
        firstname: firstName,
        lastname: lastName,
        password: password,
        email: email,
        location: location,
        profession: profession,
        image: image,
        phoneNumber: phoneNumber,
        yearsofexperience: yearsofexperience,
        confirmPassword: confirmPassword
      });
        console.log("Form submitted successfully!");
    } catch (error) {
      console.log(error)
    }

    const newEntry = [
              firstName,
              lastName,
              password,
              email,
              location,
              profession,
              image,
              phoneNumber,
              confirmPassword,
            ];

    setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
  };

  return (
    <div className="sign">
      <h1>Professional SignUp</h1>
      <form >
        <div className="firstinput">
          <input
            type="text"
            placeholder="First Name"
            className="first"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="last"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          className="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="email"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="ConfirmPassword"
          className="email"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {checkCheckConfirmPassword && <div className="check">{checkCheckConfirmPassword}</div>}
        <input
          type="text"
          placeholder="Phone Number"
          className="email"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profession"
          className="email"
          name="profession"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
        <input
          type="text"
          placeholder="Years Of Experience"
          className="email"
          name="yearsofexperience"
          value={yearsofexperience}
          onChange={(e) => setYearsofexperience(e.target.value)}
        />
        <div className="select1">
          <select
            className="locate"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="Lekki">Lekki</option>
            <option value="Ajah">Ajah</option>
            <option value="Victoria Island">Victoria Island</option>
            <option value="Ikoyi">Ikoyi</option>
            <option value="Gbagada">Gbagada</option>
            <option value="Yaba">Yaba</option>
            <option value="Surulere">Surulere</option>
            <option value="Oshodi">Oshodi</option>
            <option value="Ketu">Ketu</option>
            <option value="Mile12">Mile12</option>
          </select>
          <input
            type="file"
            name="image"
            className="file"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        <button onClick={submit} className="btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Professional;
