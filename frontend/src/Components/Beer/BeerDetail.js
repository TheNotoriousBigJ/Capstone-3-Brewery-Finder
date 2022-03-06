import React, { Component } from "react";
import { baseUrl } from '../../Shared/baseUrl';
import { Card, Breadcrumb, Button, Container, Row, Col } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { User } from "../../Redux/user";

function RenderReview({ review }) {
    return (
        <Col key={review.review_id}>
            <Card border="primary">
                <Card.Body>
                    <Card.Title>username</Card.Title>
                    <Card.Text>
                        {review.rating}
                    </Card.Text>
                    <Card.Text>
                        {review.review}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

const BeerDetail = (props) => {

    const reviewList = props.reviews.reviews.map(review => {
        return (
            <RenderReview review={review}  />
        )
    });

    if (props.reviews.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.reviews.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.reviews.errMess}</h4>
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
                        <Breadcrumb.Item><Link to="/brewery">Breweries</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={`/brewery/${props.beer.brewery_id}`}>Brewery</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Beer</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Beer</h3>
                        <hr />
                    </div>
                </div>
                <Col>
                    {reviewList}
                </Col>

            </div>
        );
}

export default BeerDetail;