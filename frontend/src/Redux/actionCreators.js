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

    return fetch(baseUrl + '/breweries')
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

        return fetch(baseUrl + '/breweries', {
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
            .catch(error => {
                console.log('Post comments ', error.message)
                alert('Your brewery could not be created\nError: ' + error.message)
            })

    }

export const putBrewery = (name, address, image, websiteUrl, phone, email, description,
    hoursOfOperation, daysOfOperation, userId, brewery_id) => (dispatch) => {

        const updatedBrewery = {
            name: name,
            address: address,
            image : image,
            websiteUrl: websiteUrl,
            phone: phone,
            email: email,
            description: description,
            hoursOfOperation: hoursOfOperation,
            daysOfOperation: daysOfOperation,
            userId: userId
        }

        return fetch(baseUrl + '/breweries/' + { brewery_id }, {
            method: 'PUT',
            body: JSON.stringify(updatedBrewery),
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
            .then(response => dispatch(updateBrewery(response)))
            .catch(error => {
                console.log('Post comments ', error.message)
                alert('Your brewery could not be updated\nError: ' + error.message)
            })

    }

export const removeBrewery = (brewery_id) => (dispatch) => {

    return fetch(baseUrl + '/breweries/' + { brewery_id }, {
        method: 'DELETE',
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
        .then(response => dispatch(deleteBrewery(response)))
        .catch(error => {
            console.log('Post comments ', error.message)
            alert('Your brewery could not be deleted\nError: ' + error.message)
        })

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

export const updateBrewery = (brewery) => ({
    type: ActionTypes.UPDATE_BREWERY,
    payload: brewery
})

export const deleteBrewery = (brewery) => ({
    type: ActionTypes.DELETE_BREWERY,
    payload: brewery
})

export const fetchBeers = () => (dispatch) => {
    dispatch(beersLoading(true));

    return fetch(baseUrl + '/beers')
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

export const postBeer = (name, brewery_id, image, description, abv, beer_type) => (dispatch) => {

    const newBeer = {
        name: name,
        brewery_id: brewery_id,
        image: image,
        description: description,
        abv: abv,
        beer_type: beer_type
    }

    return fetch(baseUrl + '/beers', {
        method: 'POST',
        body: JSON.stringify(newBeer),
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
        .then(response => dispatch(createBeer(response)))
        .catch(error => {
            console.log('Post comments ', error.message)
            alert('Your beer could not be created\nError: ' + error.message)
        })

}

export const putBeer = (name, image, description, beer_type, abv, beer_id) => (dispatch) => {

    const updatedBeer = {
        name: name,
        image: image,
        description: description,
        beer_type: beer_type,
        abv: abv
    }

    return fetch(baseUrl + '/beers/' + { beer_id }, {
        method: 'PUT',
        body: JSON.stringify(updatedBeer),
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
        .then(response => dispatch(updateBeer(response)))
        .catch(error => {
            console.log('Post comments ', error.message)
            alert('Your beer could not be updated\nError: ' + error.message)
        })

}

export const removeBeer = (beer_id) => (dispatch) => {

    return fetch(baseUrl + '/beers/' + { beer_id }, {
        method: 'DELETE',
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
        .then(response => dispatch(deleteBeer(response)))
        .catch(error => {
            console.log('Post comments ', error.message)
            alert('Your beer could not be deleted\nError: ' + error.message)
        })

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

export const createBeer = (beer) => ({
    type: ActionTypes.CREATE_BEER,
    payload: beer
})

export const updateBeer = (beer) => ({
    type: ActionTypes.UPDATE_BEER,
    payload: beer
})

export const deleteBeer = (beer) => ({
    type: ActionTypes.DELETE_BEER,
    payload: beer
})

export const fetchReviews = () => (dispatch) => {
    dispatch(reviewsLoading(true));

    return fetch(baseUrl + '/reviews')
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

export const postReview = (rating, review, userId, brewery_id) => (dispatch) => {

    const newReview = {
        rating: rating,
        review: review,
        userId : userId,
        brewery_id : brewery_id
    }

    return fetch(baseUrl + '/reviews', {
        method: 'POST',
        body: JSON.stringify(newReview),
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
        .then(response => dispatch(createReview(response)))
        .catch(error => {
            console.log('Post comments ', error.message)
            alert('Your review could not be created\nError: ' + error.message)
        })

}

export const putReview = (rating, review, review_id) => (dispatch) => {

    const updatedReview = {
        rating: rating,
        review: review
    }

    return fetch(baseUrl + '/reviews/' + { review_id }, {
        method: 'PUT',
        body: JSON.stringify(updatedReview),
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
        .then(response => dispatch(updateReview(response)))
        .catch(error => {
            console.log('Post comments ', error.message)
            alert('Your review could not be updated\nError: ' + error.message)
        })

}

export const removeReview = (review_id) => (dispatch) => {

    return fetch(baseUrl + '/reviews/' + { review_id }, {
        method: 'DELETE',
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
        .then(response => dispatch(deleteReview(response)))
        .catch(error => {
            console.log('Post comments ', error.message)
            alert('Your review could not be deleted\nError: ' + error.message)
        })

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

export const createReview = (review) => ({
    type: ActionTypes.CREATE_REVIEW,
    payload: review
})

export const updateReview = (review) => ({
    type: ActionTypes.UPDATE_REVIEW,
    payload: review
})

export const deleteReview = (review) => ({
    type: ActionTypes.DELETE_REVIEW,
    payload: review
})