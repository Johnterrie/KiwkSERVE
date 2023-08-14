import './App.css';
import { useState } from "react"
import  Professional  from './Professional';
import Login from "./Login";

function ProfessionalApp() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">

      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Professional onFormSwitch={toggleForm} />
      }

    </div>
  );
}

export default ProfessionalApp;
