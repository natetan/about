import React, { Component } from 'react';
import './FooterSubItem.scss'

export default class FooterSubItem extends Component {
  render() {
    return (
      <div className='footer-sub-item'>
        <h5 className='footer-sub-heading'>{this.props.title}</h5>
        {this.props.children}
      </div>
    )
  }
}