import { Component } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import { addToken, deleteUser, fetchBeers, fetchBreweries, fetchReviews, postBrewery } from '../../Redux/actionCreators'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Breweries from '../Brewery/Brewery'

import BreweryDetail from '../Brewery/BreweryDetail'
import BeerDetail from '../Beer/BeerDetail'
import ReviewDetail from '../Review/ReviewDetail'
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user,
        breweries: state.breweries,
        beers: state.beers,
        reviews: state.reviews
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser()) },
    fetchBreweries: () => { dispatch(fetchBreweries()) },
    fetchBeers: () => { dispatch(fetchBeers()) },
    fetchReviews: () => { dispatch(fetchReviews()) },
    resetCreateBreweryForm: () => { dispatch(actions.reset('createbrewery')) },
    postBrewery: () => { dispatch(postBrewery()) }

});

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBreweries();
        this.props.fetchBeers();
        this.props.fetchReviews();
    }

    handleLogout = () => {
        this.props.addToken("")
        this.props.deleteUser()
    }



    render() {

        const BreweryWithId = ({ match }) => {
            return (
                <BreweryDetail brewery={this.props.breweries.breweries.filter((brewery) => brewery.brewery_id === parseInt(match.params.brewery_id, 10))[0]}
                    isLoading={this.props.breweries.isLoading}
                    errMess={this.props.breweries.errMess}
                    beers={this.props.beers}
                    postBrewery={this.props.postBrewery}
                    user={this.props.user}
                />
            )
        }

        const BeerWithId = ({ match }) => {
            return (
                <BeerDetail beer={this.props.beers.beers.filter((beer) => beer.beer_id === parseInt(match.params.beer_id, 10))[0]}
                    isLoading={this.props.beers.isLoading}
                    errMess={this.props.beers.errMess}
                    reviews={this.props.reviews}
                    user={this.props.user}
                />
            )
        }

        const ReviewWithId = ({ match }) => {
            return (
                <ReviewDetail review={this.props.reviews.reviews.filter((review) => 
                        review.review_id === parseInt(match.params.review_id, 10))[0]}
                    isLoading={this.props.reviews.isLoading}
                    errMess={this.props.reviews.errMess}
                    user={this.props.user}
                />
            )
        }

        return (
            <div>
                <div>
                    {this.props.token.token !== undefined ?
                        <div>
                            <Link to='/home'>Home | </Link>
                            <Link to='/login' onClick={this.handleLogout}>logout</Link>
                            <Redirect to='/home' />

                        </div>
                        :

                        <Link to='/login'>Home | </Link>

                    }
                    <Switch>
                        <Route path='/login' component={() => <Login />} />
                        <Route path='/register' component={() => <Register />} />
                        <Route path='/home' component={this.props.token.token !== undefined ? () => <Home
                            user={this.props.user} /> : null} />
                        <Route exact path='/brewery' component={() => <Breweries 
                            breweries={this.props.breweries} 
                            postBrewery={this.props.postBrewery} 
                            resetCreateBreweryForm={this.props.resetCreateBreweryForm}
                            user={this.props.user}  />} />
                        <Route path="/brewery/:brewery_id" component={BreweryWithId} />
                        <Route path="/beer/:beer_id" component={BeerWithId} />
                        <Route path="/review/:review_id" component={ReviewWithId} />
                        <Redirect to='/login' />

                    </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));