import React, { Component, useState } from "react";
import { baseUrl } from '../../Shared/baseUrl';
import { Card, Breadcrumb, Button, Row, Col, Container, Modal } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import { Link, withRouter } from 'react-router-dom';
import BreweryForm from '../Forms/BreweryForm'
import {connect} from 'react-redux'
import './Brewery.css'

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user,
        breweries: state.breweries,
        beers: state.beers,
        reviews: state.reviews
    }
}

function RenderBrewery({ brewery }) {
    return (
       
        
        <Col key={brewery.brewery_id}>
            <Link to={`/brewery/${brewery.brewery_id}`} >
                <Card border="light" style={{ width: '30rem', height: '40rem', margin: '10px'}}>
                    <Card.Img variant="top" src={brewery.image} />
                    <Card.Body>
                        <Card.Title>{brewery.name}</Card.Title>
                        <Card.Text>
                            {brewery.address}
                            {brewery.phone}
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

const Brewery = (props) => {

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
    else
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
                <Row md={4}>
                    {breweryList}
                </Row>
            </Container>
            
        );
}

export default withRouter(connect(mapStateToProps)(Brewery));