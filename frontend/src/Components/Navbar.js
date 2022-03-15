import logo from './Images/logo.png'
import { Nav, Navbar, NavDropdown, Container, Row, Col, NavbarBrand, } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function App() {

  return (
    <div className="Navbar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <img
            alt=""
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
          />{' '}

          <Row>
            <Col>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Link to="/about">
                    <Nav.Link href="/About">About Us</Nav.Link>
                  </Link>
                  <Link to="/brewery">
                    <Nav.Link href="/brewery">Breweries</Nav.Link>
                  </Link>
                  <NavDropdown title="Directory" id="nav-menu">
                    <Link to="/login">
                      <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    </Link>
                    <Link to="/register">
                      <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div >
  );
}

export default App;

