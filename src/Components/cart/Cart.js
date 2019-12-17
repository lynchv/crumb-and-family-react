import React from 'react'
import './cart.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


const Cart = (props) => {

    return (
        <>
            <Container>
                <div className="mt-5 cart-window">
                    <span>yo</span>

                </div>
                <Button className="mt-4" variant="primary" style={{float: "right"}}>Checkout</Button>
            </Container>
        </>
    )
}

export default Cart