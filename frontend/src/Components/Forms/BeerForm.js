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


const BeerForm = (props) => {


    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [beer_type, setBeer_Type] = useState("");
    const [abv, setAbv] = useState("");
    const thisBrewery_id = props.brewery.brewery_id;

    const handleSubmit = async (props) => {
        const data = {
            name: name,
            image: image,
            description: description,
            beer_type: beer_type,
            abv: (abv + "%"),
            brewery_id: thisBrewery_id
        }
        await axios.post(baseUrl + '/beers', data);
    }

    return (
        <LocalForm model="createbeer">
            <Form.Group className="mb-3">
                <Form.Label>Beer Name</Form.Label>
                <Control.text model=".beerName" id="beerName" name="beerName"
                    placeholder="Name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    validators={{
                        required, minLength: minLength(3), maxLength: maxLength(50)
                    }} />
                <Errors
                    className="text-danger"
                    model=".beerName"
                    show="touched"
                    messages={{
                        require: 'Required',
                        minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 50 characters or less'
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Beer Image URL</Form.Label>
                <Control.text model=".image" id="image" name="image"
                    placeholder="Image URL"
                    className="form-control"
                    onChange={(e) => setImage(e.target.value)}
                    validators={{
                        required, minLength: minLength(3)
                    }} />
                <Errors
                    className="text-danger"
                    model=".image"
                    show={{ touched: true, focus: true }}
                    messages={{
                        minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 50 characters or less'
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Beer Description</Form.Label>
                <Control.textarea model=".description" id="description" name="description"
                    rows="12"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Beer Type</Form.Label>
                <Control.text model=".beer_type" id="beer_type" name="beer_type"
                    placeholder="Type"
                    className="form-control"
                    onChange={(e) => setBeer_Type(e.target.value)}
                    validators={{
                        minLength: minLength(3), maxLength: maxLength(70)
                    }} />
                <Errors
                    className="text-danger"
                    model=".beer_type"
                    show={{ touched: true, focus: true }}
                    messages={{
                        minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 70 characters or less'
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Alcohol By Volume</Form.Label>
                <Control.text model=".abv" id="abv" name="abv"
                    placeholder="Percentage"
                    className="form-control"
                    onChange={(e) => setAbv(e.target.value)}
                    validators={{
                        minLength: minLength(1), maxLength: maxLength(4), isNumber
                    }} />
                <Errors
                    className="text-danger"
                    model=".abv"
                    show={{ touched: true, focus: true }}
                    messages={{
                        minLength: 'Must be a number',
                        maxLength: 'Must be 4 characters or less'
                    }}
                />
            </Form.Group>
            <Button variant="primary" type="submit" value="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </LocalForm>
    );
}

export default BeerForm;