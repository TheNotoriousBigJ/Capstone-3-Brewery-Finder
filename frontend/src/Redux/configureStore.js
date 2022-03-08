import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createForms } from 'react-redux-form'
import thunk from 'redux-thunk'
import {Token} from './token'
import {User} from './user'
import {Brewery} from './brewery'
import {Beer} from './beer'
import {Review} from './review'
import { CreateBrewery } from './forms'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            token: Token,
            user: User,
            breweries: Brewery,
            beers: Beer,
            reviews: Review,
            ...createForms({
                createbrewery: CreateBrewery
            })
        }),
        composeEnhancers(
        applyMiddleware(thunk)
        )
    );

    return store;
}