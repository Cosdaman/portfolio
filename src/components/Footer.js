import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import '../styles/Footer.css'


export default function Footer() {
  return (
    <div className='phantom'>
      <div className="fixed-bottom  ">
        <Navbar bg="dark" variant="dark">
          <Container className='justify-content-center'>
            <Nav className="ml-auto">
              <Nav.Link href="#features">LinkedIn</Nav.Link>
              <Nav.Link href="#pricing">Github</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}


