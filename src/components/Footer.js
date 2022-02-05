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
              <Nav.Link href="https://www.linkedin.com/in/kevin-jc-ang/" target='_blank'>LinkedIn</Nav.Link>
              <Nav.Link href="https://github.com/Cosdaman" target='_blank'>Github</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}


