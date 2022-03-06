import React, { Component } from "react";
import { baseUrl } from '../../Shared/baseUrl';
import { Card, Breadcrumb, Button, Container, Row, Col } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import { Link } from 'react-router-dom';

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

const BreweryDetail = (props) => {

    const beerList = props.beers.beers.map(beer => {
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
                    <div className="col-12">
                        <h3>Breweries</h3>
                        <hr />
                    </div>
                </div>
                <Row md={4}>
                    {beerList}
                </Row>
            </Container>
        );
}

export default BreweryDetail;