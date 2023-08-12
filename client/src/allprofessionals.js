import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Allprofessionals = () => {
  return (
    <Link to="./allProfessional">
      <div className="allProfessionals">click to view all Professionals</div>
    </Link>
  );
};

export default Allprofessionals;
