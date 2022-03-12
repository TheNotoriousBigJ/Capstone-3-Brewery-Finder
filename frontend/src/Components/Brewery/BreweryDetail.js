import React, { Component, useState } from "react";
import { baseUrl } from '../../Shared/baseUrl';
import { Card, Breadcrumb, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import { Link } from 'react-router-dom';
import BeerForm from "../Forms/BeerForm";

function RenderBeer({ beer }) {
    return (
        <Col key={beer.beer_id}>
            <Card border="primary">
                <Card.Img variant="top" src={beer.image} />
                <Card.Body>
                    <Card.Title>{beer.name}</Card.Title>
                    <Card.Text>
                        {beer.description}
                    </Card.Text>
                    <Link to={`/beer/${beer.beer_id}`} >
                        <Button variant="primary">Go to Beer Page</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

function CreateBeer(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="info" onClick={handleShow}>
                Add a Beer
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create Your Beer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BeerForm brewery={props.brewery} />
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

const BreweryDetail = (props) => {

    const beerList = props.beers.beers.filter((beer) => {
        return beer.brewery_id === props.brewery.brewery_id;
    });

    const filteredBeerList = beerList.map(beer => {
        return (
                <RenderBeer beer={beer} />
        )
    });

    if (props.beers.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.beers.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.beers.errMess}</h4>
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
                        <Breadcrumb.Item><Link to="/brewery">Breweries</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Brewery</Breadcrumb.Item>
                    </Breadcrumb>
                    <Col md={{ span: 5, offset: 5 }}>
                        <h2>{props.brewery.name}</h2>
                        <h5>{props.brewery.address}</h5>
                        <h5>{props.brewery.phone}</h5>
                        <CreateBeer brewery={props.brewery} />

                    </Col>
                    <hr />
                </div>
                <Row md={4}>
                    {filteredBeerList}
                </Row>
            </Container>
        );
}

export default BreweryDetail;