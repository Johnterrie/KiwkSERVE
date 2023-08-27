import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./homepage";
import ProfessionalApp from "./component/professionalSignUp/App";
import Cards from "./component/card/component/App";
import List from "./component/List/App";
import UserSignUp from "./component/signUp/App";
import Profdashboard from "../src/component/MainPage/components/Profdashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/professional" element={<ProfessionalApp />} />
        <Route path="/ratedProfessional" element={<Cards />} />
        <Route path="/allProfessional" element={<List />} />
        <Route path="/usersignup" element={<UserSignUp />} />
        <Route path="/professionalprofile" element={<Cards />} />
        <Route path="/profdashboard" element={<Profdashboard />} />
      </Routes>
    </div>
  );
}

export default App;
