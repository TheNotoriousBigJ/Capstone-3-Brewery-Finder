import React from 'react'
import { Container, Col, Button } from 'react-bootstrap'
import './Home.css'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

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
                                <h1>Welcome to Brewsers</h1>
                                <Link to="/brewery">
                                    <Button size="lg" variant="warning">
                                        Continue to Breweries
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

export default withRouter(Home);