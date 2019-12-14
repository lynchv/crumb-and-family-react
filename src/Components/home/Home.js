import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col md={{ span: 4, offset: 2 }} className="text-right">
                    <h1>Crumbs And Family</h1>
                    <h2>Home baking made easy</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Home