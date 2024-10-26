import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png'; // Adjust path if needed

const CustomNavbar = ({ navbarScrolled }) => {
    return (
        <Navbar className={`navbar ${navbarScrolled ? 'scrolled' : ''}`} expand="lg" variant="dark">
            <div className="navbar-content">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/features">Features</Nav.Link>
                </Nav>
                <Navbar.Brand as={Link} to="/" className="navbar-logo-center">
                    <img src={logo} alt="Logo" height="50" />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </div>
        </Navbar>
    );
}

export default CustomNavbar;




