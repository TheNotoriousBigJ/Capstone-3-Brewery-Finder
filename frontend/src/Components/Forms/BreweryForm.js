import React, { Component } from 'react';
import { Button, Col, Row, FormLabel, FormGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Control, Errors, actions } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class BreweryForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.postBrewery(
            values.name,
            values.address,
            values.image,
            values.websiteUrl,
            values.phone,
            values.email,
            values.description,
            values.hoursOfOperation,
            values.daysOfOperation
        );
        this.props.resetCreateBreweryForm();

    }

    render() {
        return (
            <Form model="createbrewery" onSubmit={(values) => this.handleSubmit(values)}>
                <Form.Group className="mb-3" controlId="formCreateBrewery">
                    <Form.Label>Brewery Name</Form.Label>
                    <Control.text model=".breweryName" id="breweryName" name="breweryName"
                        placeholder="Name"
                        className="form-control"
                        validators={{
                            required, minLength: minLength(3), maxLength: maxLength(50)
                        }} />
                    <Errors
                        className="text-danger"
                        model=".breweryName"
                        show="touched"
                        messages={{
                            require: 'Required',
                            minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 50 characters or less'
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCreateBrewery">
                    <Form.Label>Brewery Address</Form.Label>
                    <Control.text model=".address" id="address" name="address"
                        placeholder="Address"
                        className="form-control"
                        validators={{
                            minLength: minLength(3), maxLength: maxLength(50)
                        }} />
                    <Errors
                        className="text-danger"
                        model=".address"
                        show={{ touched: true, focus: true }}
                        messages={{
                            minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 50 characters or less'
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCreateBrewery">
                    <Form.Label>Brewery Image URL</Form.Label>
                    <Control.text model=".image" id="image" name="image"
                        placeholder="Image URL"
                        className="form-control"
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
                <Form.Group className="mb-3" controlId="formCreateBrewery">
                    <Form.Label>Web Address</Form.Label>
                    <Control.text model=".websiteUrl" id="websiteUrl" name="websiteUrl"
                        placeholder="Website URL"
                        className="form-control"
                        pattern="https?://.+" required
                        validators={{
                            required, minLength: minLength(3), maxLength: maxLength(50)
                        }} />
                    <Errors
                        className="text-danger"
                        model=".websiteUrl"
                        show={{ touched: true, focus: true }}
                        messages={{
                            minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 50 characters or less'
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCreateBrewery">
                    <Form.Label>Brewery Phone Number</Form.Label>
                    <Control.text model=".phone" id="phone" name="phone"
                        placeholder="Phone Number"
                        className="form-control"
                        validators={{
                            required, minLength: minLength(10), maxLength: maxLength(10), isNumber
                        }} />
                    <Errors
                        className="text-danger"
                        model=".phone"
                        show="touched"
                        messages={{
                            require: 'Required',
                            minLength: 'Must be 10 numbers',
                            maxLength: 'Must be 10 numbers',
                            isNumber: 'Must be a number'

                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCreateBrewery">
                    <Form.Label>Brewery Email</Form.Label>
                    <Control.text model=".email" id="email" name="email"
                        placeholder="Email"
                        className="form-control"
                        validators={{
                            minLength: minLength(5), maxLength: maxLength(30), validEmail
                        }} />
                    <Errors
                        className="text-danger"
                        model=".email"
                        show="touched"
                        messages={{
                            minLength: 'Must be greater than 5 characters',
                            maxLength: 'Must be 30 characters or less',
                            validEmail: 'Must be a valid email address'

                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCreateBrewery">
                    <Form.Label>Brewery Description</Form.Label>
                    <Control.textarea model=".description" id="description" name="description"
                        rows="12"
                        className="form-control" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCreateBrewery">
                    <Form.Label>Hours of Operation</Form.Label>
                    <Control.text model=".hoursofoperation" id="hoursofoperation" name="hoursofoperation"
                        placeholder="Hours of Operation"
                        className="form-control"
                        validators={{
                            minLength: minLength(3), maxLength: maxLength(50)
                        }} />
                    <Errors
                        className="text-danger"
                        model=".hoursofoperation"
                        show={{ touched: true, focus: true }}
                        messages={{
                            minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 20 characters or less'
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCreateBrewery">
                    <Form.Label>Days of Operation</Form.Label>
                    <Control.text model=".daysofoperation" id="daysofoperation" name="daysofoperation"
                        placeholder="Days"
                        className="form-control"
                        pattern="+.day" required
                        validators={{
                            minLength: minLength(3), maxLength: maxLength(70)
                        }} />
                    <Errors
                        className="text-danger"
                        model=".daysofoperation"
                        show={{ touched: true, focus: true }}
                        messages={{
                            minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 70 characters or less'
                        }}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}
export default BreweryForm;