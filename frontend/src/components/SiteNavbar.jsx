import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../assets/css/SiteNavbar.css";

function SiteNavbar({profile}) {


  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">Ajay Maddineni</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/About">About Me</Nav.Link>
            <Nav.Link as={Link} to="/Skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/Projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>  
    </Navbar>
  );
}

export default SiteNavbar