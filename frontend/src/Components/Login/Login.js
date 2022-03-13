import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addToken, addUser } from '../../Redux/actionCreators'
import { baseUrl } from '../../Shared/baseUrl'
import axios from 'axios'
import './Login.css'
import { Container, Col } from 'react-bootstrap'
import BackgroundImage from '../Images/background.jpeg'

const sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: { BackgroundImage }
};

const mapDispatchToProps = (dispatch) => ({
    addToken: () => dispatch(addToken()),
    addUser: () => dispatch(addUser())
});

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleLogin = async () => {
        const data = { username: this.state.username, password: this.state.password };


        const userWithToken = await axios.post(baseUrl + '/login', data)


        await this.props.dispatch(addToken(userWithToken.data.token))
        await this.props.dispatch(addUser(userWithToken.data.user));
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="login">
                <Container fluid>
                    <Col className="container">
                        <Col className='form'>
                            <h1>Please Sign In</h1>
                            <label className="sr-only">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                class="form-control"
                                placeholder="Username"
                                v-model="user.username"
                                onChange={this.handleInputChange}
                                required
                            />
                            <label class="sr-only">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                class="form-control"
                                placeholder="Password"
                                v-model="user.password"
                                onChange={this.handleInputChange}
                                required
                            />
                            <Col className="btn">
                                <Link to="/register">Need an account?</Link>
                                <Link to={'/home'}>
                                    <button type="submit" onClick={this.handleLogin}>Sign in</button>
                                </Link>
                            </Col>
                        </Col>
                    </Col>
                </Container>
            </div>
        )
    }
}

export default withRouter(connect(mapDispatchToProps)(Login));