<<<<<<< HEAD
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../Components/Images/logo.png'
import './Navbar.css'
import { Container, Navbar, Nav } from 'react-bootstrap'
=======
import logo from './Images/logo.png'
import { Nav, Navbar, NavDropdown, Container, Row, Col, } from 'react-bootstrap'
>>>>>>> 2a140d073b4dc668acfad1678c300cc94bf334b6



function App() {

  return (
    <div className="Navbar">
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <img
                        alt=""
                        src={logo}
                        width="60"
                        height="70"
                        className="d-inline-block align-top"
                    />{' '}

  <Row>
  <Col>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/About">About Us</Nav.Link>
      <Nav.Link href="/Brewery">Breweries</Nav.Link>
      <NavDropdown title="Directory" id="nav-menu">
        <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
        <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/Contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Col>
  </Row>
  </Container>
</Navbar>
    </div>
  );
}

export default App;

