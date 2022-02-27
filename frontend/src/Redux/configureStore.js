import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Token} from './token'
import {User} from './user'
import {Brewery} from './brewery'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            token: Token,
            user: User,
            breweries: Brewery
        }),
        applyMiddleware(thunk)
    );

    return store;
}