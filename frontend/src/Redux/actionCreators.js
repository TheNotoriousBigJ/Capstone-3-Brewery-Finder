import * as ActionTypes from './actionTypes';
import { baseUrl } from '../Shared/baseUrl';

export const addToken = (token) => ({
    type: ActionTypes.ADD_TOKEN,
    payload: token
});

export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user
})

export const deleteUser = () => ({
    type: ActionTypes.DELETE_USER
})

export const fetchBreweries = () => (dispatch) => {
    dispatch(breweriesLoading(true));

    return fetch(baseUrl + '/brewery')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status
                    + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(breweries => dispatch(addBreweries(breweries)))
        .catch(error => dispatch(breweriesFailed(error.message)));

}

export const postBrewery = (name, address, websiteUrl, phone, email, description,
                            hoursOfOperation, daysOfOperation, userId) => (dispatch) => {

    const newBrewery = {
        name: name,
        address: address,
        websiteUrl: websiteUrl,
        phone: phone,
        email: email,
        description: description,
        hoursOfOperation: hoursOfOperation,
        daysOfOperation: daysOfOperation,
        userId: userId
    }

    return fetch(baseUrl + '/brewery', {
        method: 'POST',
        body: JSON.stringify(newBrewery),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status
                + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(createBrewery(response)))
        .catch(error => {console.log('Post comments ', error.message)
            alert('Your brewery could not be created\nError: ' + error.message)})

}

export const breweriesLoading = () => ({
    type: ActionTypes.BREWERIES_LOADING
});

export const breweriesFailed = (errmess) => ({
    type: ActionTypes.BREWERIES_FAILED,
    payload: errmess
});

export const addBreweries = (breweries) => ({
    type: ActionTypes.ADD_BREWERIES,
    payload: breweries
});

export const createBrewery = (brewery) => ({
    type: ActionTypes.CREATE_BREWERY,
    payload: brewery
})

export const fetchBeers = () => (dispatch) => {
    dispatch(beersLoading(true));

    return fetch(baseUrl + '/beer')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status
                    + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(beers => dispatch(addBeers(beers)))
        .catch(error => dispatch(beersFailed(error.message)));

}

export const beersLoading = () => ({
    type: ActionTypes.BEERS_LOADING
});

export const beersFailed = (errmess) => ({
    type: ActionTypes.BEERS_FAILED,
    payload: errmess
});

export const addBeers = (beers) => ({
    type: ActionTypes.ADD_BEERS,
    payload: beers
});

export const fetchReviews = () => (dispatch) => {
    dispatch(reviewsLoading(true));

    return fetch(baseUrl + '/review')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status
                    + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(reviews => dispatch(addReviews(reviews)))
        .catch(error => dispatch(reviewsFailed(error.message)));

}

export const reviewsLoading = () => ({
    type: ActionTypes.REVIEWS_LOADING
});

export const reviewsFailed = (errmess) => ({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errmess
});

export const addReviews = (reviews) => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
});