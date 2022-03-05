import React, { Component } from "react";
import { baseUrl } from '../../Shared/baseUrl';
import { Card, Breadcrumb, Button, Row, Col } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import { Link } from 'react-router-dom';

function RenderBrewery({ brewery }) {
    return (
        <Col key={brewery.brewery_id}>
            <Card border="primary">
                <Card.Img variant="top" src="holder.js/100px180" />
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
            <div className="container">
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Brewery</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Breweries</h3>
                        <hr />
                    </div>
                </div>
                <Row md={4}>
                    {breweryList}
                </Row>
            </div>
        );
}

export default Breweries;