import React, { useState } from "react";

export const Proffesional = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
    }

    return (
        <div className="prof-form-container">
            <h2>Sign Up</h2>
             <form onSubmit={handleSubmit}>
                <label htmlFor="First Name">First Name</label><br />
                <input type="text" placeholder="First Name" id="First Name" name="First Name"/><br />
                <label htmlFor="Last Name">Last Name</label><br />
                <input type="text" placeholder="Last Name" id="Last Name" name="Last Name"/><br />
                <label htmlFor="email">email</label><br />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" /><br />
                <label htmlFor="password">password</label><br />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /><br />
                <label htmlFor="phone number">Phone Number</label><br />
                <input type="phone number" placeholder="phone number" id="phone number" name="phone number"/><br />
                <label htmlFor="Practice field">Practice Field</label><br />
                <input type="practice field" placeholder="practice field" id="practice field" name="practice field"/><br />
                <label htmlFor="Role">Role</label><br />
                <input type="role" placeholder="role" id="role" name="role"/><br />
                <button type="submit">send</button>  
            </form>
        </div> 
    )
}