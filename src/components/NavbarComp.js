import React from 'react';
import '../styles/NavbarComp.css';
import resume from '../files/resume.pdf'
import { Navbar, Container, Nav } from 'react-bootstrap'


export default function NavbarComp(props) {

  const select = (linkkey) => {
    props.handlePageChange(linkkey)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='brand'>Kevin Ang</Navbar.Brand>
        <Nav className="me-auto"
          activeKey={props.currentPage}
          onSelect={select}>
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href={resume} target='_blank' active='false'>Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}


