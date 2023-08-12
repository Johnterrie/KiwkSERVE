import Profile from "./card";
import "./App";
import { useState, useEffect } from "react";
import axios from "axios";

const backend = "http://localhost:5500/getAllProfessional";

function App() {
  const { data, setData } = useState([]);

  // useEffect(() => {
  //   axios.get(backend).then((response) => {
  //     console.log(response.data);
  //     setData(response.data);
  //   });
  // });

  return (
    <div className="App">
      <h1>{data}</h1>
      <Profile />
    </div>
  );
}

export default App;
