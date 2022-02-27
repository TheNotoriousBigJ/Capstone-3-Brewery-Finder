import * as ActionTypes from './actionTypes';

export const Beer = (state = {
        isLoading: true,
        errMess: null,
        beers: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_BEERS:
            return {...state, 
                isLoading: false,
                errMess: null,
                beers: action.payload};

        case ActionTypes.BEERS_LOADING:
            return {...state, 
                isLoading: true,
                errMess: null,
                beers: []};

        case ActionTypes.BEERS_FAILED:
            return {...state, 
                isLoading: false,
                errMess: action.payload,
                beers: []};

        default:
            return state;
    }
}