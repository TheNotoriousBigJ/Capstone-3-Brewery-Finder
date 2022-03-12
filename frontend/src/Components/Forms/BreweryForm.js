import React, { Component, useState } from 'react';
import { Button, Col, Row, FormLabel, FormGroup, Form } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { Control, Errors, LocalForm } from 'react-redux-form';
import axios from 'axios';
import { baseUrl } from '../../Shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


const BreweryForm = (props) => {


    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [hoursofoperation, setHoursOfOperation] = useState("");
    const [daysofoperation, setDaysOfOperation] = useState("");
    const [brewery, setBrewery] = useState([]);

    const handleSubmit = async () => {
        const data = {
            name: name,
            address: address,
            image: image,
            websiteUrl: websiteUrl,
            phone: phone,
            email: email,
            description: description,
            hoursOfOperation: hoursofoperation,
            daysOfOperation: daysofoperation,
        }
        await axios.post(baseUrl + '/breweries', data)
        setBrewery([...brewery, data]);

    }

    return (
        <LocalForm model="createbrewery">
            <Form.Group className="mb-3">
                <Form.Label>Brewery Name</Form.Label>
                <Control.text model=".breweryName" id="breweryName" name="breweryName"
                    placeholder="Name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
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
            <Form.Group className="mb-3">
                <Form.Label>Brewery Address</Form.Label>
                <Control.text model=".address" id="address" name="address"
                    placeholder="Address"
                    className="form-control"
                    onChange={(e) => setAddress(e.target.value)}
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
            <Form.Group className="mb-3">
                <Form.Label>Brewery Image URL</Form.Label>
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
                <Form.Label>Web Address</Form.Label>
                <Control.text model=".websiteUrl" id="websiteUrl" name="websiteUrl"
                    placeholder="Website URL"
                    className="form-control"
                    pattern="https?://.+" required
                    onChange={(e) => setWebsiteUrl(e.target.value)}
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
            <Form.Group className="mb-3">
                <Form.Label>Brewery Phone Number</Form.Label>
                <Control.text model=".phone" id="phone" name="phone"
                    placeholder="Phone Number"
                    className="form-control"
                    onChange={(e) => setPhone(e.target.value)}
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
            <Form.Group className="mb-3">
                <Form.Label>Brewery Email</Form.Label>
                <Control.text model=".email" id="email" name="email"
                    placeholder="Email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
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
            <Form.Group className="mb-3">
                <Form.Label>Brewery Description</Form.Label>
                <Control.textarea model=".description" id="description" name="description"
                    rows="12"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Hours of Operation</Form.Label>
                <Control.text model=".hoursofoperation" id="hoursofoperation" name="hoursofoperation"
                    placeholder="Hours of Operation"
                    className="form-control"
                    onChange={(e) => setHoursOfOperation(e.target.value)}
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
            <Form.Group className="mb-3">
                <Form.Label>Days of Operation</Form.Label>
                <Control.text model=".daysofoperation" id="daysofoperation" name="daysofoperation"
                    placeholder="Days"
                    className="form-control"
                    onChange={(e) => setDaysOfOperation(e.target.value)}
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
            <Button variant="primary" type="submit" value="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </LocalForm>
    );
}

export default BreweryForm;