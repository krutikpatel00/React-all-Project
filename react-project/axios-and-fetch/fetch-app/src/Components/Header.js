import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
      return (
            <Navbar expand="lg" className="bg-body-tertiary">
                  <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="me-auto">
                                    <Nav.Link ><Link to='/'>User</Link></Nav.Link>
                                    <Nav.Link><Link to='/userview'>User View</Link></Nav.Link>

                              </Nav>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      )
}

export default Header