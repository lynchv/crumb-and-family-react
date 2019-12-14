import React from 'react';
import Item from './Item'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Shop = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Item />
                </Col>
            </Row>
        </Container>
    )
}

export default Shop