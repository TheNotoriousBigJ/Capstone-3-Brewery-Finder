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