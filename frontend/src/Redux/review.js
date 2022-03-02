import * as ActionTypes from './actionTypes';

export const Review = (state = {
        isLoading: true,
        errMess: null,
        reviews: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_REVIEWS:
            return {...state, 
                isLoading: false,
                errMess: null,
                reviews: action.payload};

        case ActionTypes.REVIEWS_LOADING:
            return {...state, 
                isLoading: true,
                errMess: null,
                reviews: []};

        case ActionTypes.REVIEWS_FAILED:
            return {...state, 
                isLoading: false,
                errMess: action.payload,
                reviews: []};

        default:
            return state;
    }
}