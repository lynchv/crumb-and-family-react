import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const PageNavigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="home">Crumbs And Family</Navbar.Brand>
            <Link to='/home'>
                <Nav.Item>Home</Nav.Item>
            </Link>
            <Link to='/cupcakes'>
                <Nav.Item>Cupcakes</Nav.Item>
            </Link>
        </Navbar>
    )
}

export default PageNavigation
