import React, { Component, useState } from 'react';
import { Button, Col, Row, FormLabel, FormGroup, Form } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { Control, Errors, LocalForm, actions } from 'react-redux-form';
import axios from 'axios';
import { baseUrl } from '../../Shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


const ReviewForm = (props) => {


    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");
    const thisBeer_Id = props.beer.beer_id;

    const handleSubmit = async (props) => {
        const data = {
            review: review,
            rating: rating,
            beer_id: thisBeer_Id,
            user_id: 1
        }
        await axios.post(baseUrl + '/reviews', data);
    }

    return (
        <LocalForm model="createreview">
            <Form.Group className="mb-3">
                <Form.Label>Rate This Beer</Form.Label>
                <Control.select model=".rating" name="rating"
                    className="form-control"
                    onChange={(e) => setRating(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Control.select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Review</Form.Label>
                <Control.textarea model=".review" id="review" name="review"
                    placeholder="Write your review here"
                    className="form-control"
                    onChange={(e) => setReview(e.target.value)}
                    validators={{
                        required, minLength: minLength(3), maxLength: maxLength(500)
                    }} />
                <Errors
                    className="text-danger"
                    model=".review"
                    show={{ touched: true, focus: true }}
                    messages={{
                        minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 500 characters or less'
                    }}
                />
            </Form.Group>

            <Button variant="primary" type="submit" value="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </LocalForm>
    );
}

export default ReviewForm;