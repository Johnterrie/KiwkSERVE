import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import "./Navbar.css";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container fluid id='nav'>
        <Navbar.Brand href="#"><h2>Kwikserve</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

<NavDropdown title="Artisan Available" id="navbarScrollingDropdown" className='m-2'>
              
              { <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search" 
                  
                />  }
                <button className='search-btn'>search</button> 
                  
          
                   <NavDropdown.Item href="#action3">
                     Electrician
                  </NavDropdown.Item>
                  <NavDropdown.Divider /> 
                  <NavDropdown.Item href="#action5">
                    Plumber
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">
                    Maid
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">
                    Painter
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">
                    Laundry
                  </NavDropdown.Item>
                </NavDropdown>
    

                <NavDropdown title="Location" id="navbarScrollingDropdown" className='m-2'>
              
               { <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search" 
                  
                />  }
                <button className='search-btn'>search</button>
                   
          
                   <NavDropdown.Item href="#action3">
                     Lekki
                  </NavDropdown.Item>
                  <NavDropdown.Divider /> 
                  <NavDropdown.Item href="#action5">
                    Ajah
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">
                    Victoria island
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">
                    Ikoyi
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">
                    Gbagada
                  </NavDropdown.Item>
                </NavDropdown>
    



            {/* <Nav.Link href="#action1">Home</Nav.Link> */}
            {/* <Nav.Link href="#action2">About Us</Nav.Link> */}


            
          </Nav>
          <Form className="d-flex">

          {/* <NavDropdown title="List of Professionals Available" id="navbarScrollingDropdown" className='m-2'>
              
          <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search" 
              
            /> 
            // <button className='search-btn'>search</button>
              
      
               <NavDropdown.Item href="#action3">
                 Electrician
              </NavDropdown.Item>
              <NavDropdown.Divider /> 
              <NavDropdown.Item href="#action5">
                Plumber
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">
                Maid
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">
                Painter
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">
                Laundry
              </NavDropdown.Item>
            </NavDropdown> */}

            {/* <NavDropdown title="Sign Up" id="navbarScrollingDropdown" className='signup'>
              <NavDropdown.Item href="#action3">Professional</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Client
              </NavDropdown.Item>
            </NavDropdown> */}

               <button id='btnbecome'>Become an Artisan</button>

            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
