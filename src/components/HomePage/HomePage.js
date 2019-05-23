import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import RouterLink from '../RouterLink/RouterLink';
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
            <p className="lead title">{'SSD - Student & Software Developer'}</p>
            <p className="lead subtitle"></p>
            <p className="lead">
              <Button size='lg' variant='success'>
                <RouterLink to='/about' text='Learn more' />
              </Button>
            </p>
          </div>
        </Container>
      </div>
    )
  }
}