import React from 'react'
import './login.css'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const LoginUi = ({onLogin}) => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget
        const loginInfo = {}
        for (const group of form) {
            if (group.id !== "") {
                loginInfo[group.id] = group.value
            }
        }
        onLogin(loginInfo.email, loginInfo.password)
    }

    return (
        <div className="formContainer">
            <Form id="loginForm" onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <p>Email address</p>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="password">
                    <p>Password</p>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="w-100 mt-3" variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div className="form-footer mt-3">
                <a href="/register">Register</a>
                &ensp;|&ensp;
                <a href="/recover">Forgot password</a>
            </div>
        </div>
    )
}
export default LoginUi
