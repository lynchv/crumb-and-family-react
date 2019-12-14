import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from './utils/Icon'
// import { Link } from 'react-router-dom';


const PageNavigation = () => {
    return (
        <Container fluid={true}>
            <Row className="mt-3">
                <Col xs={3}>
                    <Icon icon='home' size="medium"/>
                </Col>
                <Col className="text-center mt-2">
                    <ul>
                        <Icon icon='cupcake'/>
                        <li className="nav-options">Cupcakes</li>
                        <Icon icon='cookie'/>
                        <li className="nav-options">Cookies</li>
                        <Icon icon='about'/>
                        <li className="nav-options">About</li>
                        <Icon icon='contact'/>
                        <li className="nav-options">Contact</li>
                    </ul>
                </Col>
                <Col xs={3} className="text-right">
                    <Icon icon='checkout' size="medium"/>
                </Col>
            </Row>
        </Container>
    )
}

export default PageNavigation
