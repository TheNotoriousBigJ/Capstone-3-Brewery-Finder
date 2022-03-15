import React from 'react'
import { Container, Col, Row, ListGroup } from 'react-bootstrap'



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
                                <Col>
                                    <Row style={{ marginBottom: "10px" }}>
                                        <h1 className="aboutus">Welcome to the Brewser Brewery Finder Application!</h1>
                                    </Row>
                                    <Row style={{ marginBottom: "10px", textIndent: "30px"}}>
                                        <p className="aboutus" >This is the Ultimate Brewery Finder Application for all brewery enthusiasts and hobbyists. We have a curated database of breweries and a community of beer enthusiasts who share their experiences with others. At a touch of a finger, you can easily find the address, phone number and website for each breweries, brewpubs, microbreweries and tap rooms throughout the United States.</p>
                                    </Row>
                                    <Row style={{ marginBottom: "10px" }}>
                                        <h1 className="aboutus">Our Mission</h1>
                                    </Row>
                                    <Row style={{fontSize : "20px"}}>
                                        <ListGroup className="aboutus">
                                            <ListGroup.Item><strong>Breweries navigator</strong> - The easiest way to find breweries near you. The relevant search feature allows you to find the best breweries and beers near you.</ListGroup.Item>
                                            <ListGroup.Item><strong>Real visitor reviews</strong> - Reviews from real users so you can choose breweries based on real beer ratings.</ListGroup.Item>
                                            <ListGroup.Item><strong>Relevant information included</strong> -  Users can go to the brewery's website to find more information or Call directly using the phone on the listing and get directions.</ListGroup.Item>
                                            <ListGroup.Item><strong>Great cooperation with breweries</strong> - We help breweries to be able to understand beer drinkers better.</ListGroup.Item>
                                        </ListGroup>

                                    </Row>
                                </Col>
                            </div>

                        </div>
                    </Col>
                </Col>
            </Container>
        </>
    )
}
export default About