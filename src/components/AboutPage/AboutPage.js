import React, { Component } from 'react';
import strings from '../../resources/strings.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import './AboutPage.scss';

export default class AboutPage extends Component {
  render() {
    return (
      <section id="about" className="about-page text-center">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h1 className="text-white mb-4">About</h1>
              <p className="text-white-50">{strings.about_2}</p>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}