import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../Components/Images/logo.png'
import './Navbar.css'
import { Container, Navbar, Nav } from 'react-bootstrap'




const Footer = () => {

    return (

      <>
  <Navbar bg="light">
    <Container>
      <Navbar.Brand>Duff Beer</Navbar.Brand>
      <a type="button" class="btn btn-floating btn-light btn-lg"><i class="fab fa-facebook-f"></i></a>
    </Container>
  </Navbar>
  <br />
  <Navbar bg="dark">
  <Container>
    <Navbar.Brand href="#home">

      <img
        src="/logo.svg"
        width="20"
        height="20"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Container>
  </Navbar>
  
</>
     
    )



}

export default Footer;