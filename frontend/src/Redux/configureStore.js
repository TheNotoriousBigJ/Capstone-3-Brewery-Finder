import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Token} from './token'
import {User} from './user'
import {Brewery} from './brewery'
import {Beer} from './beer'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            token: Token,
            user: User,
            breweries: Brewery,
            beers: Beer
        }),
        applyMiddleware(thunk)
    );

    return store;
}