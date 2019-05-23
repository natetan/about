import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';
import './MainNav.scss';

export default class MainNav extends Component {
  render() {
    return (
      <div className='main-nav'>
        <Navbar bg="dark" variant='dark' expand="lg">
          <Navbar.Brand>
            <Link to='/' className='nav-links'>yulong.party</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to='/about' className='nav-links'>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/projects' className='nav-links'>
                  Projects
                </Link>
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}