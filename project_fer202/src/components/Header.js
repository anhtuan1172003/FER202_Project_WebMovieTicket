import React from 'react';
import { Nav, Navbar, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/Header.css';

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Col className="header-brand">
          <Navbar.Brand as={Link} to="/home">
            <h1>Cinema</h1>
          </Navbar.Brand>
        </Col>
        <Col className="header-tab">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
              <Nav.Link href="#sales">Sales</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/authentication">SignIn/SignUp</Nav.Link>
              <Nav.Link as={Link} to="/userprofile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
}