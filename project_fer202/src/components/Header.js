import { React, Nav, Navbar, Container, Col } from "react-bootstrap";
import '../style/Header.css';
import '../components/Auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authentication from "../components/Auth";
import UserProfiles from "./UserProfile";



export default function Header() {
  return (
    <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Col className="header-brand"><Navbar.Brand href="#home"><h1>Cinema</h1></Navbar.Brand></Col>
          <Col className="header-tab"><Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#schedule">Schedule</Nav.Link>
                <Nav.Link href="#sales">Sales</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="/authentication">SignIn/SignUp</Nav.Link>
                <Nav.Link href="/userprofile">Profile</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/userprofile" element={<UserProfiles />} />
      </Routes>
    </BrowserRouter>
  );
}