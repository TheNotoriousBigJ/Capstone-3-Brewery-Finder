import React, {Component} from "react";
import { baseUrl } from "../../Shared/baseUrl";

const breweries = [];

class BreweryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breweries: []
        };
    }
    
    componentDidMount() {
        fetch(baseUrl + '/brewery')
        .then(response => response.json())
        .then(data => {
            this.setState({
                breweries: data
            });
        });
    }

    render() {

        return(
            <div>
                {this.state.breweries}
            </div>
        )
    }
}

export default BreweryList;