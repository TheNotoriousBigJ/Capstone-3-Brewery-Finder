import logo from './Images/logo.png'
import { Nav, Navbar, NavDropdown, Container, Row, Col, } from 'react-bootstrap'



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
      <Nav.Link href="/brewery">Breweries</Nav.Link>
      <NavDropdown title="Directory" id="nav-menu">
        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
        <NavDropdown.Item href="/register">Register</NavDropdown.Item>
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

