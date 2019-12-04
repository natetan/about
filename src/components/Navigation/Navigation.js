import React, { Component } from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Icon from '../Icon/Icon';
import './Navigation.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../images/ytango-logo.png';
import RouterLink from '../RouterLink/RouterLink';
import { LinkContainer } from "react-router-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <NavBar id='main-nav' expand='lg' variant='dark' fixed='top'>
        <div className="container">
          {/* <LinkContainer to='/' className='nav-links'> */}
            <Navbar.Brand className="js-scroll-trigger" href="/">
              <img src={Logo} width='50' height='50' alt='logo' />
            </Navbar.Brand>
          {/* </LinkContainer> */}
          <NavBar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* <LinkContainer to='/about'> */}
                <Nav.Link className='nav-linkz'>About</Nav.Link>
              {/* </LinkContainer> */}
              {/* <LinkContainer to='/projects'> */}
                <Nav.Link className='nav-linkz'>Projects</Nav.Link>
              {/* </LinkContainer> */}
              {/* <LinkContainer to='/contact'> */}
                <Nav.Link className='nav-linkz'>Contact</Nav.Link>
              {/* </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </NavBar>
      // <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      //   <div class="container">
      //     <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
      //     <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      //       Menu
      //   <i class="fas fa-bars"></i>
      //     </button>
      //     <div class="collapse navbar-collapse" id="navbarResponsive">
      //       <ul class="navbar-nav ml-auto">
      //         <li class="nav-item">
      //           <a class="nav-link js-scroll-trigger" href="#about">About</a>
      //         </li>
      //         <li class="nav-item">
      //           <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
      //         </li>
      //         <li class="nav-item">
      //           <a class="nav-link js-scroll-trigger" href="#signup">Contact</a>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
    )
  }
}