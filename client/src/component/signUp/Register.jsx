import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import useTogglePassword from "./useTogglePassword";
import axios from "axios";
import List from "../List/App"



export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [PasswordInputType, ToggleIcon] = useTogglePassword();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [data, setData] = useState("");
    const [response, setResponse] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(
            name.trim() === "" ||
            email.trim() === '' ||
            pass.trim() === ''
        ) {
            setError("Please fill all the Fields")
        } else {
            setSuccess("sign up successfully")
        }

        try {
            const response = await axios.post("http://localhost:8080/usersignup", {
                fullName: name,
                email: email,
                password: pass
            }).then((response) => response.data);
            setResponse(true)
            setData(response)
            console.log("form submitted Successfully");
        } catch (e) {
            console.log("Error: " + e.message)
        }


    }


  const loginPage = () => {

    return (
        <div className="auth-form-container">
           <h2>User Register</h2>
           <form className="register-form" onSubmit={handleSubmit}>
               <label htmlFor="name"> <FontAwesomeIcon icon={faUser} className="inputIcon" /> Full name</label>
               <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="full name" />
               <label htmlFor="email"> <FontAwesomeIcon icon={faUser} className="inputIcon" /> email</label>
               <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
               <label htmlFor="password"> <FontAwesomeIcon icon={faLock} className="inputIcon" /> password</label>
               <input value={pass} onChange={(e) => setPass(e.target.value)} type={PasswordInputType} placeholder="********" id="password" name="password" />
               <span className="passord-toggle-icon">{ToggleIcon}</span>
               <span>{error}</span><span>{success}</span>
               <button type="submit">Sign Up</button>
           </form>
           <div className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</div>
       </div>
    )
  };


console.log(data)

return (
    <div>
        { response ? <List list = {data}/> : loginPage()}
    </div>
  );
}