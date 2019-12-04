import React, { Component, Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from '../Icon/Icon';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt, faEnvelopeOpen, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import strings from '../../resources/strings.json';
import './MainFooter.scss';

export default class MainFooter extends Component {
  render() {
    return (
      <Fragment>
        <section id='contact' className="contact-section bg-black">
          <div className="container">
            <Row>
              <Col md={4} className='mb-3 mb-md-0'>
                <Card className='py-4 h-100'>
                  <Card.Body className='text-center'>
                    <Icon icon={faMapMarkedAlt} color='#64a19d' />
                    <h4 className="text-uppercase m-0">Address</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">Definitely not on Mars.</div>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4} className='mb-3 mb-md-0'>
                <Card className='py-4 h-100'>
                  <Card.Body className='text-center'>
                    <Icon icon={faEnvelopeOpen} color='#64a19d' />
                    <h4 className="text-uppercase m-0">Email</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">yulongtan67@gmail.com</div>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4} className='mb-3 mb-md-0'>
                <Card className='py-4 h-100'>
                  <Card.Body className='text-center'>
                    <Icon icon={faMobileAlt} color='#64a19d' />
                    <h4 className="text-uppercase m-0">Phone</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">+1 (206) 778-1865</div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <div className="social d-flex justify-content-center">
            <a href={strings.urls.github} target='_blank' rel='noopener noreferrer' className='mx-2'>
                <Icon icon={faGithub} color='#64a19d' size='2x' />
              </a>
              <a href={strings.urls.linkedin} target='_blank' rel='noopener noreferrer' className='mx-2'>
                <Icon icon={faLinkedinIn} color='#64a19d' size='2x' />
              </a>
              <a href={strings.urls.instagram} target='_blank' rel='noopener noreferrer' className='mx-2'>
                <Icon icon={faInstagram} color='#64a19d' size='2x' />
              </a>
            </div>

          </div>
        </section>
        <footer className="bg-black small text-center text-white-50">
          <div className="container">
            Copyright &copy; Nate Y. Tan 2019
          </div>
        </footer>
      </Fragment>
    )
  }
}