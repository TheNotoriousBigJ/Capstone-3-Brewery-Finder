import React from 'react'
import { Container, Col, Button } from 'react-bootstrap'
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <style type="text/css">
                {`
            .col-1 {
                padding: 1rem 1rem 1rem 0;
                height: 70vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                color: white;
            }
            `}
            </style>
            <Container fluid>

                <Col variant="primary-color" className='home'>
                    <Col className="container">
                        <div className="content">
                            <div className="text">
                                <p>Welcome to Brewsers</p>
                                <Link to="/brewery">
                                    <Button size="lg" variant="outline-warning">
                                        Go to Brewery
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Col>
            </Container>
        </>
    )
}

export default Home