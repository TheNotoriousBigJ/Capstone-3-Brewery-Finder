import logo from './Images/logo.png'
import { Nav, Navbar, NavDropdown, Container, Row, Col, NavbarBrand, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiFillGoogleCircle, AiFillFacebook, AiFillTwitterCircle,
         AiFillInstagram, AiFillRedditCircle, AiOutlineMail } from "react-icons/ai";
import { IconContext } from 'react-icons';

function Footer() {

    return (
        <Navbar fixed="bottom" style={{ backgroundColor: '#f6945c', maxHeight: '66px' }}>
            <Container fluid style={{ justifyContent: 'center' }}>
                <Navbar.Brand>
                    <Row>
                        <Col>
                    <Nav.Link href="https://www.google.com/">
                        <IconContext.Provider value={{ color: '#de5246', size: '2em' }}>
                            <AiFillGoogleCircle />
                        </IconContext.Provider>
                    </Nav.Link>
                    </Col>
                    <Col>
                    <Nav.Link href="https://www.facebook.com/">
                        <IconContext.Provider value={{ color: '#4267B2', size: '2em' }}>
                            <AiFillFacebook />
                        </IconContext.Provider>
                    </Nav.Link>
                    </Col>
                    <Col>
                    <Nav.Link href="https://www.twitter.com/">
                        <IconContext.Provider value={{ color: '#1DA1F2', size: '2em' }}>
                            <AiFillTwitterCircle />
                        </IconContext.Provider>
                    </Nav.Link>
                    </Col>
                    <Col>
                    <Nav.Link href="https://www.instagram.com/">
                        <IconContext.Provider value={{ color: '#833AB4', size: '2em' }}>
                            <AiFillInstagram />
                        </IconContext.Provider>
                    </Nav.Link>
                    </Col>
                    <Col>
                    <Nav.Link href="https://www.reddit.com/">
                        <IconContext.Provider value={{ color: '#FF4500', size: '2em' }}>
                            <AiFillRedditCircle />
                        </IconContext.Provider>
                    </Nav.Link>
                    </Col>
                    <Col>
                    <Nav.Link href="https://www.gmail.com/">
                        <IconContext.Provider value={{ color: '#FFFFFF', size: '2em' }}>
                            <AiOutlineMail />
                        </IconContext.Provider>
                    </Nav.Link>
                    </Col>
                    </Row>
                </Navbar.Brand>

            </Container>
        </Navbar>
    )
}

export default Footer;
