import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import useTogglePassword from "./useTogglePassword";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [PasswordInputType, ToggleIcon] = useTogglePassword();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
         <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name"> <FontAwesomeIcon icon={faUser} className="inputIcon" /> Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="full name" />
                <label htmlFor="email"> <FontAwesomeIcon icon={faUser} className="inputIcon" /> email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password"> <FontAwesomeIcon icon={faLock} className="inputIcon" /> password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type={PasswordInputType} placeholder="********" id="password" name="password" />
                <span className="passord-toggle-icon">{ToggleIcon}</span>
                <button type="submit">Sign Up</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )    
}