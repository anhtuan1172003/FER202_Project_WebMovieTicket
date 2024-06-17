import { React, Nav, Navbar, Container, NavLink } from "react-bootstrap";
import '../style/Header.css';
import '../components/Auth';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Authentication from "../components/Auth";
import AccountNav from "./AccountNav";


export default function Header() {
  return (
    <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Cinema</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#schedule">Schedule</Nav.Link>
              <Nav.Link href="#sales">Sales</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Link to="/authentication">SignIn/SignUp</Link>
              <Link to="/userprofile">profile</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/authentication" Component={Authentication} />
      </Routes>
    </BrowserRouter>

  );
}