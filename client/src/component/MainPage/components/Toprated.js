import React from "react";
import { Link } from "react-router-dom";
import { TopratedList } from "./TopratedList";
import TopratedCard from "./TopratedCard";
import "./Toprated.css";



function Toprated() {
  return (
    <div className="toprated">
      <h2 className="topratedtitle">Top Rated Professionals</h2>
      <div className="topratedList">
        {TopratedList.map((topratedCard, key) => {
          return (
            
              <TopratedCard
                id={key}
                image={topratedCard.image}
                name={topratedCard.name}
                occupation={topratedCard.occupation}
                location={topratedCard.location}
              />
          );
        })}
      </div>
    </div>
  );
}

export default Toprated;
