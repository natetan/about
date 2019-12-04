import React, {Component} from 'react';
import './BigButton.scss';
import Button from 'react-bootstrap/Button';

export default class BigButton extends Component {
  render() {
    return (
      <Button className='btn btn-primary js-scroll-trigger'>
        {this.props.text}
      </Button>
    )
  }
}