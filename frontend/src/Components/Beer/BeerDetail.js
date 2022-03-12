import React, { Component, useState } from "react";
import { baseUrl } from '../../Shared/baseUrl';
import { Card, Breadcrumb, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { User } from "../../Redux/user";
import ReviewForm from "../Forms/ReviewForm";

function RenderReview({ review }) {
    return (
        <Col key={review.review_id}>
            <Card border="light" bg="secondary">
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

function CreateReview(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button size="lg" variant="outline-warning" onClick={handleShow}>
                Rate and Review
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Rate and Review This Beer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReviewForm beer={props.beer} />
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

const BeerDetail = (props) => {

    const reviewList = props.reviews.reviews.filter((review) => {
        return review.beer_id === props.beer.beer_id;
    });

    const filteredReviewList = reviewList.map(review => {
        return (
            <RenderReview review={review} />
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
            <Container fluid>
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/brewery">Breweries</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={`/brewery/${props.beer.brewery_id}`}>Brewery</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Beer</Breadcrumb.Item>
                    </Breadcrumb>
                    <Col className="text-center">
                        <h3>{props.beer.name}</h3>
                        <Row>
                            <Col>
                                {props.beer.beer_type}
                            </Col>
                            <Col>
                                {props.beer.abv}
                            </Col>
                        </Row>
                        <Col>
                            {props.beer.description}
                        </Col>
                        <Col>
                            <CreateReview beer={props.beer} />
                        </Col>
                        <hr />
                    </Col>
                </div>
                <Col>
                    {filteredReviewList}
                </Col>

            </Container>
        );
}

export default BeerDetail;