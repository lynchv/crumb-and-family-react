import React from 'react'
import './login.css'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Login = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget
        const values = {}
        for (const group of form) {
            if (group.id != "") {
                values[group.id] = group.value
            }
        }
        console.log(values)
      }

    return (
        <div className="formContainer">
            <Form id="loginForm" onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                    <p>Email address</p>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <p>Password</p>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="w-100 mt-2" variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}
export default Login
