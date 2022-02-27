import { Component } from 'react'
import { Switch, Route, Redirect, Link, Router } from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import { addToken, deleteUser, fetchBeers, fetchBreweries } from '../../Redux/actionCreators'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Brewery from '../Brewery/Brewery'

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user,
        breweries: state.breweries
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser()) },
    fetchBreweries: () => { dispatch(fetchBreweries()) },
    fetchBeers: () => { dispatch(fetchBeers()) }
});

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBreweries();
        this.props.fetchBeers();
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
                    <Redirect to='/login' />
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));