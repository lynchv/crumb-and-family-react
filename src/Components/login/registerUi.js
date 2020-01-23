import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const RegisterUi = ({onRegister}) => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget
        const registerInfo = {}
        for (const group of form) {
            if (group.id !== "") {
                registerInfo[group.id] = group.value
            }
        }
        onRegister(registerInfo)
      }

    return (
        <div className="formContainer">
            <Form id="registerForm" onSubmit={handleSubmit}>
                <Form.Group controlId="first_name">
                    <p>First Name</p>
                    <Form.Control placeholder="First Name" />
                </Form.Group>
                <Form.Group controlId="last_name">
                    <p>Last Name</p>
                    <Form.Control placeholder="Last Name" />
                </Form.Group>
                <Form.Group controlId="email">
                    <p>Email address</p>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="password">
                    <p>Password</p>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="w-100 mt-3" variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default RegisterUi
