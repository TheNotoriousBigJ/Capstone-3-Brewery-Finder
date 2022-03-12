import React, { Component, useState } from "react";
import { baseUrl } from '../../Shared/baseUrl';
import { Card, Breadcrumb, Button, Row, Col, Container, Modal } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import { Link } from 'react-router-dom';
import BreweryForm from '../Forms/BreweryForm'

function RenderBrewery({ brewery }) {
    return (
        <Col key={brewery.brewery_id}>
            <Card border="primary">
                <Card.Img variant="top" src={brewery.image} />
                <Card.Body>
                    <Card.Title>{brewery.name}</Card.Title>
                    <Card.Text>
                        {brewery.description}
                    </Card.Text>
                    <Link to={`/brewery/${brewery.brewery_id}`} >
                        <Button variant="primary">Go to Brewery Page</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

function CreateBrewery(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="info" onClick={handleShow}>
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
            <div className="container">
                <div className="row">
                    <Loading />
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
    else
        return (
            <Container fluid>
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Brewery</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row md={6}>
                        <h3>Breweries</h3>
                        <CreateBrewery 
                            postBrewery={props.postBrewery} 
                            resetCreateBreweryForm={props.resetCreateBreweryForm} />
                    </Row>
                </div>
                <Row md={4}>
                    {breweryList}
                </Row>
            </Container>
        );
}

export default Breweries;