import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Logo from '../../images/ytango-logo.png';
import RouterLink from '../RouterLink/RouterLink';
import './MainNav.scss';

export default class MainNav extends Component {
  render() {
    return (
      <div className='main-nav'>
        <Navbar bg="dark" variant='dark' expand="lg">
          <Navbar.Brand>
            <Link to='/' className='nav-links'>
              <img src={Logo} width='50' height='50' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <RouterLink to='/about' text='About' />
              </Nav.Link>
              <Nav.Link>
                <RouterLink to='/projects' text='Projects' />
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