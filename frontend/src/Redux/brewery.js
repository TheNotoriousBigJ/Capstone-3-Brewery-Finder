import * as ActionTypes from './actionTypes';

export const Brewery = (state = {
        isLoading: true,
        errMess: null,
        breweries: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_BREWERIES:
            return {...state, 
                isLoading: false,
                errMess: null,
                breweries: action.payload};

        case ActionTypes.BREWERIES_LOADING:
            return {...state, 
                isLoading: true,
                errMess: null,
                breweries: []};

        case ActionTypes.BREWERIES_FAILED:
            return {...state, 
                isLoading: false,
                errMess: action.payload,
                breweries: []};
                
        case ActionTypes.CREATE_BREWERY:
            let brewery = action.payload;
            return {...state, breweries: state.breweries.concat(brewery)};                

        default:
            return state;
    }
}