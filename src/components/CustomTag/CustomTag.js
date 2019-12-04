import React, {Component} from 'react';
import './CustomTag.scss';

export default class CustomTag extends Component {
  render() {
    return (
      <span className='custom-tag'>
        {this.props.text}
      </span>
    )
  }
}