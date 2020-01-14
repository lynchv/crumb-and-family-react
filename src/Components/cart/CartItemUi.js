import React from 'react'
import './cart.css'
import Button from 'react-bootstrap/Button'
import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import formatMoney from '../utils/utils'

const CartItem = ({index, item, onItemRemove}) => {

    return (
        <Media>
            <img className="cart-item-image mr-4" alt="Item" src={"data:image/jpeg;base64," + item.image}/>
            <Media.Body>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <h2> {item.name} </h2>
                            <Button variant="danger" onClick={ () => onItemRemove(index)}>Remove</Button>
                        </Col>
                        <Col className="text-right">
                            <span style={{"fontSize": "25px"}}>{formatMoney(item.price)}$</span>
                        </Col>
                    </Row>
                </Container>


            </Media.Body>
        </Media>
    )
}
export default CartItem
