import React from 'react'
import { Container, Col } from 'react-bootstrap'
import './Home.css'

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
                        <p>Welcome to Bruser</p>
                    </div>
                    <h1>Maine's Premier</h1>
                    <h1>Brewery</h1>
                </div>
            </Col>
        </Col>
        </Container>
        </>
    )
}

export default Home