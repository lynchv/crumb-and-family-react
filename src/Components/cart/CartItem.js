import React from 'react'
import './cart.css'
import Button from 'react-bootstrap/Button'
import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import formatMoney from '../utils/utils'

const CartItem = (props) => {

    return (
        <Media>
            <div className={`cart-item-image mr-4 ${props.imageRef}`}>
            </div>
            <Media.Body>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <h2> {props.displayName} </h2>
                            <Button variant="danger">Remove</Button>
                        </Col>
                        <Col className="text-right">
                            <span style={{"fontSize": "25px"}}>{formatMoney(props.price)}$</span>
                        </Col>
                    </Row>
                </Container>


            </Media.Body>
        </Media>
    )
}
export default CartItem
