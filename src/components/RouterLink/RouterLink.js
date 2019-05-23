import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RouterLink.scss';

export default class RouterLink extends Component {
  render() {
    return (
      <div className='router-link'>
        <Link to={this.props.to} className='nav-links'>
          {this.props.text}
        </Link>
      </div>
    )
  }
}