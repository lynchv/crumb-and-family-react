import React from 'react'
import './cart.css'
import CartItem from './CartItem'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import formatMoney from '../utils/utils'


const Cart = (props) => {

    let cartTotal = 0
    props.items.map( item => (
        cartTotal += item.price
    ))

    return (
        <>
            <Container>
                <div className="mt-5 cart-window">
                    {props.items.map(item => (
                        <CartItem key={item.itemId} {...item} />
                    ))}
                </div>
                <div className="mt-4 float-right">
                    <span className="mr-3">Total: {formatMoney(cartTotal)}$</span>
                    <Button variant="primary">Checkout</Button>
                </div>
            </Container>
        </>
    )
}

export default Cart