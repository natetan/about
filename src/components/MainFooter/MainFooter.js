import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterSubItem from './FooterSubItem/FooterSubItem';
import Icon from '../Icon/Icon';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import strings from '../../resources/strings.json';
import Logo from '../../images/ytango-logo.png';
import './MainFooter.scss';

export default class MainFooter extends Component {
  render() {
    return (
      <div className='main-footer'>
        <Container>
          <Row>
            <Col md='3'>
              <img className='mb-2' src={Logo} alt='logo' width='50' height='50' />
              <small className="d-block mb-3 copyright">© Yulong Tan 2019</small>
            </Col>
            <Col md='3'>
              <FooterSubItem title='Contact'>
                <a href={strings.urls.github} target='_blank' rel='noopener noreferrer'>
                  <Icon icon={faGithub} size='2x' color='#0fea94' />
                </a>
                <a href={strings.urls.linkedin} target='_blank' rel='noopener noreferrer'>
                  <Icon icon={faLinkedinIn} size='2x' color='#0fea94' />
                </a>
              </FooterSubItem>
            </Col>
            <Col md='3'>
              <FooterSubItem title='Interests' >
                <ul className='list-unstyled text-small'>
                  <li>
                    <a target='_blank' rel='noopener noreferrer' className='footer-link' href={strings.urls.leaflet}>GIS</a>
                  </li>
                  <li>
                    <a target='_blank' rel='noopener noreferrer' className='footer-link' href={strings.urls.classics}>Classics</a>
                  </li>
                  <li>
                    <a target='_blank' rel='noopener noreferrer' className='footer-link' href={strings.urls.poetry}>Poetry</a>
                  </li>
                  <li>
                    <a target='_blank' rel='noopener noreferrer' className='footer-link' href={strings.urls.reppoem}>Why She Disappeared</a></li>
                </ul>
              </FooterSubItem>
            </Col>
            <Col md='3'>
            <FooterSubItem title='Resources' >
                <ul className='list-unstyled text-small'>
                  <li>
                    <a target='_blank' rel='noopener noreferrer' className='footer-link' href={strings.urls.befunky}>befunky</a>
                  </li>
                  <li>
                    <a target='_blank' rel='noopener noreferrer' className='footer-link' href={strings.urls.i340}>Web Dev</a>
                  </li>
                  <li>
                    <a target='_blank' rel='noopener noreferrer' className='footer-link' href={strings.urls.jobs}>SDE Jobs</a>
                  </li>
                  <li>
                    <a target='_blank' rel='noopener noreferrer' className='footer-link' href={strings.urls.libgen}>Library Genesis</a></li>
                </ul>
              </FooterSubItem>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}