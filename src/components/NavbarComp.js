import React from 'react';

import '../styles/NavbarComp.css';
import { Navbar, Container, Nav } from 'react-bootstrap'


export default function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Kevin Ang</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">About Me</Nav.Link>
          <Nav.Link href="#features">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Resume</Nav.Link>
          <Nav.Link href="#features">LinkedIn</Nav.Link>
          <Nav.Link href="#pricing">Github</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}


