import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import List from "../List/App";
import Card from "../card/component/App";
import UserDashBoard from "../userDashboard/App"

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState("");
  const [success, setSuccess] = useState("");
  const [response, setResponse] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (email.trim() === "" || pass.trim() === "") {
      setError("Please fill all the Fields");
    } else {
      setSuccess("sign up successfully");
    }

    try {
      const response = await axios
        .post("http://localhost:8080/userlogin", {
          email: email,
          password: pass,
        })
        .then((response) => response.data);
        setResponse(true)
        setData(response)
    } catch (error) {
      console.log("Error: " + error.message);
    }
  };

  const loginPage = () => {
    return (
      <div className="auth-form-container">
        <h2>User Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">
            {" "}
            <FontAwesomeIcon icon={faUser} className="inputIcon" /> email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">
            {" "}
            <FontAwesomeIcon icon={faLock} className="inputIcon" /> password
          </label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button onClick={handleSubmit} type="submit">
            Log In
          </button>
        </form>
        <div
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </div>

      </div>
    );
  };

  return (
    <div>
        { response ? <UserDashBoard data = {data} /> : loginPage()}
    </div>
  );
};
