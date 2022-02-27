import {Component} from 'react'
import {Switch, Route, Redirect, Link, Router} from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import {addToken, deleteUser, fetchBreweries} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
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
    deleteUser: () => { dispatch(deleteUser())},
    fetchBreweries: () => {dispatch(fetchBreweries())}
});

class Main extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchBreweries();
    }

    handleLogout = () => {
        this.props.addToken("")
        this.props.deleteUser()
    }

    render(){
        return(
            <div>
                {this.props.token.token !== undefined ?
                        <div>
                            <Link to='/home'>Home | </Link>
                            <Link to='/login' onClick={this.handleLogout}>logout</Link> 
                            <Redirect to='/home'/>

                        </div>  
                    : 
                        <Link to='/login'>Home | </Link>
                }
                <Switch>
                    <Route path='/login' component={() => <Login />}/>
                    <Route path='/register'component={() => <Register/>}/>
                    <Route path='/home' component={this.props.token.token !== undefined ? () => <Home/> : null}/>
                    <Route path='/brewery' component={() => <Brewery breweries={this.props.breweries} />}/>
                    <Redirect to='/login'/>
                </Switch>
            </div>
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));