import { Component } from 'react'
import { Switch, Route, Redirect, Link, Router } from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import { addToken, deleteUser, fetchBeers, fetchBreweries, fetchReviews } from '../../Redux/actionCreators'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Brewery from '../Brewery/Brewery'
import BreweryDetail from '../Brewery/BreweryDetail'
import BeerDetail from '../Beer/BeerDetail'
import ReviewDetail from '../Review/ReviewDetail'

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
    fetchReviews: () => {dispatch(fetchReviews())}
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
                <BreweryDetail brewery={this.props.breweries.breweries.filter((brewery) => brewery.breweryId === parseInt(match.params.breweryId, 10))[0]}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}
                />
        )
        }

        const BeerWithId = ({ match }) => {
            return (
                <BeerDetail beer={this.props.beers.beers.filter((beer) => beer.beerId === parseInt(match.params.beerId, 10))[0]}
                isLoading={this.props.beers.isLoading}
                errMess={this.props.beers.errMess}
                />
        )
        }

        const ReviewWithId = ({ match }) => {
            return (
                <ReviewDetail review={this.props.reviews.reviews.filter((review) => review.reviewId === parseInt(match.params.reviewId, 10))[0]}
                isLoading={this.props.reviews.isLoading}
                errMess={this.props.reviews.errMess}
                />
        )
        }

        return (
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
                    <Route path='/home' component={this.props.token.token !== undefined ? () => <Home /> : null} />
                    <Route path='/brewery' component={() => <Brewery breweries={this.props.breweries} />} />
                    <Route path="/brewery/:breweryId" component={BreweryWithId} />
                    <Route path="/beer/:beerId" component={BeerWithId} />
                    <Route path="/review/:reviewId" component={ReviewWithId} />
                    <Redirect to='/login' />
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));