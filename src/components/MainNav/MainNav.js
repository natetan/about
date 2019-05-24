import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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
              <img src={Logo} width='50' height='50' alt='logo'/>
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
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}