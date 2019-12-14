import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col md={{ span: 4, offset: 2 }} className="text-right">
                    <h1 className="main-title">Crumbs And Family</h1>
                    <h2>Home baking made easy</h2>
                    <Link to="/cupcakes">
                        <button className="shop-now mt-2">Shop Now</button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Home