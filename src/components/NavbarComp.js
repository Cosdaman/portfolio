import React from 'react';
import '../styles/NavbarComp.css';
import { Navbar, Container, Nav } from 'react-bootstrap'


export default function NavbarComp(props) {

  const select = (linkkey) => {
    props.handlePageChange(linkkey)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#about">Kevin Ang</Navbar.Brand>
        <Nav className="me-auto"
          activeKey={props.currentPage}
          onSelect={select}>
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
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


