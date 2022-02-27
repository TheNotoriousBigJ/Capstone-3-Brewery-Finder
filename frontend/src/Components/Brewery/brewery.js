import React, { Component } from "react";
import {baseUrl} from '../'

class Brewery extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            brewery_id: '',
            name: '',
            address: '',
            websiteUrl: '',
            phone: '',
            email: '',
            description: '',
            userId: ''
        };
    }

    componentDidMount() {
        fetch()
    }
}