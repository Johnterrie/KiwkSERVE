import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import "./Navbar.css";
import { Routes, Route, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "./logo.png";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container fluid id="nav">
        <Navbar.Brand className="logo-div" href="#">
          <img src={logo} className="logo" alt="logo" />
          <h4 className="kwik">Kwikserve</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
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
              <NavDropdown.Item href="#action3">Electrician</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Plumber</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Maid</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Painter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Laundry</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Location"
              id="navbarScrollingDropdown"
              className="m-2"
            >
              <NavDropdown.Item href="#action3">Lekki</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Ajah</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">
                Victoria island
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Ikoyi</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Gbagada</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Link to="/professional">
            <button id="btnbecome">Become a Professional</button>
          </Link>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

            <Button className="SearchBtn">
              <FaSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
