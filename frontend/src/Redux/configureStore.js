import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createForms } from 'react-redux-form'
import thunk from 'redux-thunk'
import {Token} from './token'
import {User} from './user'
import {Brewery} from './brewery'
import {Beer} from './beer'
import {Review} from './review'
import { CreateBrewery } from './forms'

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
        applyMiddleware(thunk)
    );

    return store;
}