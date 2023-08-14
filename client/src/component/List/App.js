import React from "react";
import "./appCard.css";
import AppCard from "./appCard";
import man from "./person.jpg";
import NavBar from "./Navbar";

function App({ list }) {
  const { professionals } = list;

  return (
    <div className="app-container">
      <NavBar />
      {professionals.map((data) => {
        return (
          <div className="div-container">
            <AppCard
              info = {data}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
