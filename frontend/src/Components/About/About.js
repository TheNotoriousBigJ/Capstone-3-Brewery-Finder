import React from 'react'
import { Container, Col } from 'react-bootstrap'


const About = () => {
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
                    <h1>About Us</h1>
                    <p>Bruiser Brewery is a licensed Maine State farm brewery dedicated to crafting innovative, locally-sourced beer.  
                            Proud to be located in Portland, Maine and the Fore Lakes, we love our state!  
                            We believe that beer supports and builds community, and we want our beer to start conversations about what it means to be local and about the process of making great beer.  
                            Come visit and explore the awesome potential of craft beer with us!</p>
                            <h1>Our Mission</h1>
                    <p>We are humbled to base our operations in the Historic Portland, Maine area and proud to be revitalizing a historic community gathering place.  
                        Brewers believes in the beer’s power to build a community. We’re comminuted to using what we create and where we create it to bring people together, while celebrating the rich and diverse culture of the Greater Historic Portland, Maine Area. 
Revolving around the pillars of Community, Creativity, and Inclusivity, our goal each day is to create a diverse, vibrant culture that uses beer, art food and music to inspire, unite, and drive positive change in our world.</p>
                    </div>
                    
                </div>
            </Col>
        </Col>
        </Container>
        </>
    )
}