import React from 'react';
import { Navbar, NavbarBrand, Container } from 'react-bootstrap'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className='phantom'>
      <div className="fixed-bottom">
        <Navbar bg="dark" variant="dark">
          <Container>
            <NavbarBrand>Footer</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}


