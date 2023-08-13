import React, { useState } from "react";

 const Professional = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');
    const [myLocation, setMyLocation] = useState('');
    const [profession, setProfession] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
    }

    const handleChange = (e) => {
        setMyLocation(e.target.value)
      }

    const changeData = (e) => {
        setProfession(e.target.value)
    }
    

    return (
        <div>
             <div className="auth-form-container">
            <h2 className="reg-text">Register your account</h2>
            <form className="professional-form" onSubmit={handleSubmit}>
                <label htmlFor="First Name">Name</label>
                <input type="text" placeholder="Enter your full name..." id="First Name" name="First Name"/>
                <label htmlFor="email">Email address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email address..." id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password..." id="password" name="password" />
                <label htmlFor="password">Confirm Password</label>
                <input value={confirm} onChange={(e) => setConfirm(e.target.value)} type="password" placeholder="Confirm your password..." id="Confirm password" name="Confirm password" />
                <label htmlFor="phone number">Phone Number</label>
                <input type="phone number" placeholder="phone number..." id="phone number" name="phone number"/>
                <label htmlFor="Practice field">Profession</label>
                <select className="lll" value={profession} onChange={changeData}>
                    <option>Select profession...</option>
                    <option value="Mechanic">Mechanic</option>
                    <option value="Plumber">Plumber</option>
                    <option value="Painter">Painter</option>
                </select>
                <input type="practice field" placeholder="Enter profession..." id="practice field" name="practice field" value={profession}/>
                <label htmlFor="Practice field">Location</label>
                <select className="lll" value={myLocation} onChange={handleChange}>
                    <option className="sel-locate">Select location...</option>
                    <option value="ikoyi">ikoyi</option>
                    <option value="Gbagada">Gbagada</option>
                    <option value="Lekki">Lekki</option>
                </select>
                <input type="practice field" placeholder="Choose location..." id="practice field" name="practice field" value={myLocation}/>
                <button type="submit">Sign up</button>  
            </form>
        </div> 
        </div>
       
    )
}

export default Professional; 