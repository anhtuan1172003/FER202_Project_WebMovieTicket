import { React, Nav, Navbar, Container, Col } from "react-bootstrap";
import '../style/Header.css';

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Col className="header-brand"><Navbar.Brand href="#home"><h1>Cinema</h1></Navbar.Brand></Col>
        <Col className="header-tab"><Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#schedule">Schedule</Nav.Link>
              <Nav.Link href="#sales">Sales</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link to="/Authentication">Sign In/Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
}