import axios from 'axios';
import { useState } from 'react'
import { Container, Col, Form, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { baseUrl } from '../../Shared/baseUrl';

const Register = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [brewerAccount, setBrewerAccount] = useState(false);

    const handleSubmit = () => {
        let role = 'ROLE_USER';
        if (brewerAccount) {
            role = 'ROLE_BREWER';
        }
        const data = { username: username, password: password, confirmPassword: confirmPassword, role: role }
        if (password === confirmPassword) {
            axios.post(baseUrl + "/register", data)
        }
    }

    return (
        <>
            <Container fluid>
                <Col className="container">
                    <Form>
                        <h1>Create Account</h1>
                        <Form.Group>
                            <Form.Label class="sr-only formlabel">Username </Form.Label>
                            <Form.Control
                                type="text"
                                id="username"
                                name="username"
                                class="form-control"
                                placeholder="Username"
                                v-model="user.username"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label class="sr-only formlabel">Password</Form.Label>
                            <Form.Control
                                type="password"
                                id="password"
                                name="password"
                                class="form-control"
                                placeholder="Password"
                                v-model="user.password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="password"
                                id="password-confirm"
                                name="password-confirm"
                                class="form-control formlabel"
                                placeholder="Confirm Password"
                                v-model="user.password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                type="checkbox"
                                id="brewer-select"
                                name="brewer-select"
                                label="Are you registering as a Brewer?"
                                class="form-control formlabel"
                                onChange={(e) => setBrewerAccount(e.target.checked)}
                            />
                        </Form.Group>
                        <Link to="/login">Have an account?</Link>
                        <button type="submit" onClick={handleSubmit}>Sign in</button>

                    </Form>
                </Col>
            </Container>
        </>
    )
}

export default Register;