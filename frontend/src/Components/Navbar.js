import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from 'C:/Users/jwrob/Merit_America/Projects/Final Capstone/final-capstone/frontend/src/Components/Images/logo.png'
import './Navbar.css'
import { Container, Navbar, Nav } from 'react-bootstrap'

const BreweryNavbar = () => {

    const [click, setClick] = useState(false)

    const startClick = () => setClick(!click)



    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/home">
                    <img
                        alt=""
                        src={logo}
                        width="60"
                        height="70"
                        className="d-inline-block align-top"
                    />{' '}
                    <strong>React Bootstrap</strong>
                </Navbar.Brand>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/brewery">Breweries</Nav.Link>
                <Nav.Link href="">Userpage</Nav.Link>
                <Nav.Link href="">Logout</Nav.Link>
            </Container>
        </Navbar>
    )
}

export default BreweryNavbar;