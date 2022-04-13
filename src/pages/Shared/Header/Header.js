import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <header className="position-sticky top-0 main-menu">
      <Navbar expand="lg">
        <Container>
          <Link to="/home">
            <img className="w-50" src={logo} alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} className="custom-link" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="custom-link" to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
