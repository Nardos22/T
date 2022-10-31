import "./sass/index.scss";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack';
import { NavItem } from "react-bootstrap";


function NavBar() {
  return (
    <Stack direction="horizontal" gap={3}>
      <Navbar bg="light" expand="sm" fixed="top" >
        
        <Container>
          <Navbar.Brand href="#home">
              <a 
                href="#" class = "navbar-brand">
                <img
                  class="d-inline-block align-top"
                  src="logo.png" width="70" height="70" alt="coolBrand" />
              </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="reponsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className=" ms-auto">
              <Nav.Item className=" ms-auto">
                <Nav.Link href="#home">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                  </svg> {'  '}
                      Home
                      </Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Item className="ms-auto" >
                <Nav.Link href="#tickets">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-ticket-detailed" viewBox="0 0 16 16">
                    <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z"/>
                    <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5ZM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5h-13Z"/>
                  </svg> {'  '}
                    Tickets
                    </Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Item className="ms-auto">
                  <Nav.Link href="#login">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg> {' '}
                    Log In
                  </Nav.Link>

                </Nav.Item>

              </Nav>
              <Nav className="ms-auto">
                <NavItem className=" ms-auto" >
                  <NavDropdown title="More" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </NavItem>
              </Nav>
        
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    </Stack>
  );
}

export default NavBar;
