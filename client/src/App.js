import "./App.css";
import { Router, Route, Routes } from "react-router-dom";
import Homepage from "./homepage";
import Professional from "./component/profile/App";
import Cards from "./component/card/component/App";
import List from "./component/List/App"


function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/professional" element={<Professional />}/>
          <Route path="/ratedProfessional" element={<Cards/>} />
          <Route path="/allProfessional" element={<List/>}/>
        </Routes>
    </div>
  );
}

export default App;
