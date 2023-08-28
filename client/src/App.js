import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./homepage";
import ProfessionalApp from "./component/professionalSignUp/App";
import Cards from "./component/card/component/App";
import List from "./component/List/App"
import UserSignUp from "./component/signUp/App"
import Dashboard from "./component/professionalDashBoard/App"
import UserDashboard from "./component/userDashboard/App"
import ImageSlide from './component/imageslider/App.js'
import Maintenance from "./maintenance";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/professional" element={<ProfessionalApp />}/>
          <Route path="/ratedProfessional" element={<Cards/>} />
          <Route path="/allProfessional" element={<List/>}/>
          <Route path="/usersignup" element={<UserSignUp/>}/>
          <Route path="/professionalprofile" element={<Cards/>}/>
          <Route path="/professionaldashboard" element={<Dashboard/>}/>
          <Route path="/userdashboard" element={<UserDashboard/>}/>
          <Route path="/imageslider" element={<ImageSlide/>}/>
          <Route path="/maintenance" element={<Maintenance/>}/>
        </Routes>
    </div>
  );
}

export default App;
