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
        <Link className="logo-div" to="/">
          <img src={logo} className="logo" alt="logo" />
          <h4 className="kwik">Kwikserve</h4>
        </Link>

        <div>
          <Link className="login-div" to="/usersignup">Login/Signup</Link>
          <Link to="/professional">
            <button id="btnbecome">Professionals</button>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
