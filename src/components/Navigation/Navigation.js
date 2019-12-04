import React, { Component } from 'react';
import NavBar from 'react-bootstrap/Navbar';
import './Navigation.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/ytango-logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';

export default class Navigation extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  render() {
    let navs = [
      {
        to: 'about',
        name: 'About'
      },
      {
        to: 'projects',
        name: 'Projects'
      },
      {
        to: 'contact',
        name: 'Contact'
      }
    ];
    let navElements = navs.map((n, i) => {
      return (
        <Link
          className='nav-link'
          activeClass='active'
          to={n.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          href='#'
          key={i}
        >
          {n.name}
        </Link>
      )
    })
    return (
      <NavBar id='main-nav' expand='lg' bg='dark' variant='dark' fixed='top'>
        <div className="container">
          <Navbar.Brand className="js-scroll-trigger" href='#' onClick={this.scrollToTop}>
            <img src={Logo} width='50' height='50' alt='logo' />
          </Navbar.Brand>
          <NavBar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {navElements}
            </Nav>
          </Navbar.Collapse>
        </div>
      </NavBar>
    )
  }
}