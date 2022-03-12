import axios from 'axios';
import {useState} from 'react'
import { Container, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { baseUrl } from '../../Shared/baseUrl';

const Register = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {
        const data = {username: username, password: password, confirmPassword: confirmPassword, role: 'ROLE_USER'}
        if(password === confirmPassword){
            axios.post(baseUrl + "/register", data)
        }
    }

    return(
        <>
        <Container fluid>
        <Col className="container">
                    <Col className='form'>
            <h1>Create Account</h1>
            <label class="sr-only">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                class="form-control"
                placeholder="Username"
                v-model="user.username"
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="password"
                id="password-confirm"
                name="password-confirm"
                class="form-control"
                placeholder="Confirm Password"
                v-model="user.password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <Link to="/login">Have an account?</Link>
            <button type="submit" onClick={handleSubmit}>Sign in</button>
            </Col>
            </Col>
            </Container>
        </>
    )
}

export default Register;