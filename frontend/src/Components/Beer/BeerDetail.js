import React, { Component, useState } from "react";
import { baseUrl } from '../../Shared/baseUrl';
import { Card, Breadcrumb, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { User } from "../../Redux/user";
import ReviewForm from "../Forms/ReviewForm";

function RenderReview({ review, user }) {
    return (
        <Col key={review.review_id}>
            <Card border="light" bg="secondary">
                <Card.Body>
                    <Card.Title>{user.username}</Card.Title>
                    <Card.Text>
                        <h5 style={{color: 'white'}}>Rating: {review.rating}</h5>
                    </Card.Text>
                    <Card.Text>
                    <h5 style={{color: 'white'}}>{review.review}</h5>
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
            <RenderReview review={review} user={props.user} />
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
    else if (props.user.authorities[0].name === "ROLE_USER")
        return (
            <Container fluid>
                <div>
                    <Breadcrumb>

                        <Breadcrumb.Item><Link to="/brewery">Breweries</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={`/brewery/${props.beer.brewery_id}`}>Brewery</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Beer</Breadcrumb.Item>
                    </Breadcrumb>
                    <Card className="text-center" bg='#5cf694'>
                        <Card.Body>
                            <Card.Title><h1>{props.beer.name}</h1></Card.Title>
                            <Card.Subtitle>
                                <h3>{props.beer.beer_type}</h3>
                            </Card.Subtitle>
                            <Card.Subtitle>
                                <h6>{props.beer.abv}</h6>
                            </Card.Subtitle>
                            <Card.Text>
                                {props.beer.description}
                            </Card.Text>
                            <CreateReview beer={props.beer} user={props.user} />
                        </Card.Body>
                    </Card>
                    <hr />
                </div>
                <Col>
                    {filteredReviewList}
                </Col>

            </Container>
        );
    else
        return (
            <Container fluid>
                <div>
                    <Breadcrumb>

                        <Breadcrumb.Item><Link to="/brewery">Breweries</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={`/brewery/${props.beer.brewery_id}`}>Brewery</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Beer</Breadcrumb.Item>
                    </Breadcrumb>
                    <Card className="text-center" bg='#5cf694'>
                        <Card.Body>
                            <Card.Title><h1>{props.beer.name}</h1></Card.Title>
                            <Card.Subtitle>
                            <h3>{props.beer.beer_type}</h3>
                            </Card.Subtitle>
                            <Card.Subtitle>
                                <h4>ABV: {props.beer.abv}</h4>
                            </Card.Subtitle>
                            <Card.Text>
                            <h5>{props.beer.description}</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <hr />
                </div>
                <Col>
                    {filteredReviewList}
                </Col>

            </Container>
        );
}

export default BeerDetail;