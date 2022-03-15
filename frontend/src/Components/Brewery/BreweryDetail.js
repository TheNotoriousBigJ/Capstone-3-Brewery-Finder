import React, { Component, useState } from "react";
import { baseUrl } from '../../Shared/baseUrl';
import { Card, Breadcrumb, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import { Link } from 'react-router-dom';
import BeerForm from "../Forms/BeerForm";

function RenderBeer({ beer }) {
    return (
        <Col key={beer.beer_id}>
            <Link to={`/beer/${beer.beer_id}`} >
                <Card border="light" style={{ width: '30rem', height: '40rem', margin: '10px' }}>
                    <Card.Img variant="top" src={beer.image} />
                    <Card.Body>
                        <Card.Title>{beer.name}</Card.Title>
                        <Card.Text>
                            {beer.beer_type}
                        </Card.Text>
                        <Card.Text>
                            ABV: {beer.abv}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

function CreateBeer(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button size="lg" variant="warning" onClick={handleShow}>
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
    else if (props.user.authorities[0].name === "ROLE_BREWER" && props.brewery.userId === props.user.id) {
        return (
            <Container fluid style={{marginBottom: '60px'}}>
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/brewery">Breweries</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Brewery</Breadcrumb.Item>
                    </Breadcrumb>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>{props.brewery.name}</Card.Title>
                            <Card.Subtitle>
                                <h5>{props.brewery.address}</h5>
                            </Card.Subtitle>
                            <Card.Subtitle>
                                <h5>{props.brewery.phone}</h5>
                            </Card.Subtitle>
                            <Card.Subtitle>
                                {props.brewery.hoursOfOperation}
                            </Card.Subtitle>
                            <Card.Subtitle>
                                {props.brewery.daysOfOperation}
                            </Card.Subtitle>
                            <Card.Text>
                                {props.brewery.description}
                            </Card.Text>
                            <CreateBeer brewery={props.brewery} />
                        </Card.Body>
                    </Card>
                    <hr />
                </div>
                <Row sm={1} md={2} lg={3} xl={4} xxl={5}>
                    {filteredBeerList}
                </Row>
            </Container>
        );
    } else
        return (
            <Container fluid style={{marginBottom: '60px'}}>
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/brewery">Breweries</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Brewery</Breadcrumb.Item>
                    </Breadcrumb>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>{props.brewery.name}</Card.Title>
                            <Card.Subtitle>
                                <h5>{props.brewery.address}</h5>
                            </Card.Subtitle>
                            <Card.Subtitle>
                                <h5>{props.brewery.phone}</h5>
                            </Card.Subtitle>
                            <Card.Subtitle>
                                {props.brewery.hoursOfOperation}
                            </Card.Subtitle>
                            <Card.Subtitle>
                                {props.brewery.daysOfOperation}
                            </Card.Subtitle>
                            <Card.Text>
                                {props.brewery.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <hr />
                </div>
                <Row md={4}>
                    {filteredBeerList}
                </Row>
            </Container>
        );
}

export default BreweryDetail;