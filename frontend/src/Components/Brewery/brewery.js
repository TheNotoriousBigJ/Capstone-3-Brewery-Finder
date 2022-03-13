import React, { Component, useState } from "react";
import { Breadcrumb, Button, Row, Col, Container, Modal } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import { Link } from 'react-router-dom';
import BreweryForm from '../Forms/BreweryForm'
import './Brewery.css'
import Card from 'react-bootstrap/Card'


function RenderBrewery({ brewery }) {
    return (


        <Col className="wrapper" key={brewery.brewery_id}>
            <Link to={`/brewery/${brewery.brewery_id}`} >
                <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" src={brewery.image} />
                    <Card.Body>
                        <Card.Title>{brewery.name}</Card.Title>
                        <Card.Text>
                            {brewery.address}</Card.Text>
                        <Card.Text>{brewery.phone}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

function CreateBrewery(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button size="lg" variant="outline-warning" onClick={handleShow}>
                Create a Brewery
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create Your Brewery</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BreweryForm
                        postBrewery={props.postBrewery}
                        resetCreateBreweryForm={props.resetCreateBreweryForm} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const Breweries = (props) => {

    const breweryList = props.breweries.breweries.map(brewery => {
        return (
            <RenderBrewery brewery={brewery} />
        )
    });



    if (props.breweries.isLoading) {
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            </div>
        );
    }
    else if (props.breweries.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.breweries.errMess}</h4>

                </div>
            </div>

        );
    }

    /*Buttons*/
    else if (props.user.authorities[0].name === "ROLE_ADMIN") {
        return (
            <Container fluid>
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Brewery</Breadcrumb.Item>
                    </Breadcrumb>
                    <Col className="text-center">
                        <h1>Breweries</h1>
                        <CreateBrewery
                            postBrewery={props.postBrewery}
                            resetCreateBreweryForm={props.resetCreateBreweryForm} />
                    </Col>
                </div>
                <Row sm={1} md={2} lg={3} xl={4} xxl={5} >
                
                    {breweryList}
                </Row>
            </Container>

        );
    } else
    
    return (
        <Container fluid>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>Brewery</Breadcrumb.Item>
                </Breadcrumb>
                <Col className="text-center">
                    <h1>Breweries</h1>
                </Col>
            </div>
            <Row sm={1} md={2} lg={3} xl={4} xxl={5}>
                {breweryList}
            </Row>
        </Container>


    );

}

export default Breweries;