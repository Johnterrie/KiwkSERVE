import { useState } from "react";
import React from "react";
import "./appCard.css";
import AppCard from "./appCard";
import { ListProfessional } from "./listProf";
import man from "./person.jpg";
import NavBar from "./Navbar";
import logo from "./logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function App() {
  const [value, setValue] = useState(ListProfessional);

  const handlefilter = (e) => {
    const filteritem = e.target.textContent;

    const filter = ListProfessional.filter(
      (data) => data.Profession === filteritem.toString()
    );

    setValue(filter);
  };

  const handleLocation = (e) => {
    const filteritem = e.target.textContent;

    const filter = ListProfessional.filter(
      (data) => data.location === filteritem.toString()
    );

    setValue(filter);
  };

  return (
    <div className="app-container">
      <div>
        <Navbar expand="lg" className="bg-body-secondary">
          <Container fluid id="nav">
            <Link to='/' className="logo-div" href="#"> 
              <img src={logo} className="logo" alt="logo" />
              <h4 className="kwik">Home</h4>
            </Link>
           

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown
                  title="Professionals Available"
                  id="navbarScrollingDropdown"
                  className="m-2"
                >
                  <NavDropdown.Item value="Electrician" onClick={handlefilter}>
                    Electrician
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item value="Plumber" onClick={handlefilter}>
                    Plumber
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item value="Maid" onClick={handlefilter}>
                    Maid
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item value="Painter" onClick={handlefilter}>
                    Painter
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item value="Dry Cleaner" onClick={handlefilter}>
                    Dry Cleaner
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Location"
                  id="navbarScrollingDropdown"
                  className="m-2"
                >
                  <NavDropdown.Item
                    value="Lekki"
                    onClick={handleLocation}
                    href="#action3"
                  >
                    Lekki
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    value="Ajah"
                    onClick={handleLocation}
                    href="#action5"
                  >
                    Ajah
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    value="Lagos onClick={handleLocation} Island"
                    href="#action3"
                  >
                    Victoria island
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    value="Ikoyi"
                    onClick={handleLocation}
                    href="#action3"
                  >
                    Ikoyi
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    value="Gbagaday"
                    onClick={handleLocation}
                    href="#action3"
                  >
                    Gbagada
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="app-container">
        {value.map((data) => {
          return (
            <div className="div-container">
              <AppCard info={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
