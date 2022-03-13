import { Component } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import { addToken, deleteUser, fetchBeers, fetchBreweries, fetchReviews, postBrewery } from '../../Redux/actionCreators'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Brewery from '../Brewery/Brewery'
import BreweryDetail from '../Brewery/BreweryDetail'
import BeerDetail from '../Beer/BeerDetail'
import ReviewDetail from '../Review/ReviewDetail'
import { actions } from 'react-redux-form';
import Navbar from '../Navbar'
import About from '../About/About'

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
                    token={this.props.token.token}
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
                    token={this.props.token.token}
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
                    token={this.props.token.token}
                />
            )
        }

        return (
            <div>
                <div>
                    {this.props.token.token !== undefined ?
                        <div>
                            <Navbar user={this.props.user}
                                    token={this.props.token.token} />
                            <Link to='/home'>Home | </Link>
                            <Link to='/login' onClick={this.handleLogout}>logout</Link>
                            <Redirect to='/home' />

                        </div>
                        :
                        <>
                        
                        <Navbar />
                        </>

                    }
                    <Switch>
                        <Route path='/login' component={() => <Login />} />
                        <Route path='/register' component={() => <Register />} />
                        <Route path='/about' component={() => <About />} />
                        <Route path='/home' component={this.props.token.token !== undefined ? () => <Home /> : null} />
                        <Route exact path='/brewery' component={this.props.token.token !== undefined ? () => <Brewery
                            breweries={this.props.breweries}
                            postBrewery={this.props.postBrewery}
                            resetCreateBreweryForm={this.props.resetCreateBreweryForm}
                            token={this.props.token.token}
                            user={this.props.user}
                        /> : null} />
                        <Route path="/brewery/:brewery_id" component={this.props.token.token !== undefined ? BreweryWithId : null} />
                        <Route path="/beer/:beer_id" component={this.props.token.token !== undefined ? BeerWithId : null} />
                        <Route path="/review/:review_id" component={this.props.token.token !== undefined ? ReviewWithId : null} />
                        <Redirect to='/login' />

                    </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));