import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './HomePage.scss';
import PagePhoto from '../../images/ny-library-cropped.png';

export default class HomePage extends Component {
  render() {
    return (
      <div className='home-page'>
        <Container>
          <div className="home-page-container">
            <img className='page-photo' src={PagePhoto} />
            <h1 className="cover-heading">Yulong Tan</h1>
            <p className="lead">{'SSD - Student & Software Developer'}</p>
            <p className="lead">
              <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
            </p>
          </div>
        </Container>
      </div>
    )
  }
}