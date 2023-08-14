import React from "react";
import "./appCard.css";
import AppCard from "./appCard";
import man from "./person.jpg";
import NavBar from "./Navbar";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="div-container">
        <AppCard
          image
          src={man}
          alt="person"
          companyName="Shell Company"
          companyAddress="1102 Maryland St, City"
          companyDescription="A leading provider of technical innovative solutions."
          phoneNumber="+23490656***"
          cityState="Lagos,State"
        />
      </div>
    </div>
  );
}

export default App;
