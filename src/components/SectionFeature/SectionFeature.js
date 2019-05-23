import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./SectionFeature.scss";

export default class SectionFeature extends Component {
  render() {
    let sectionImage = (
      <Col sm="5" className="section-image">
        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={{ width: '500px', height: '500px' }} src={this.props.img} data-holder-rendered="true" />
      </Col>
    );

    let sectionText = (
      <Col sm="7" className="section-text">
        <div className='text-content'>
          {this.props.children}
        </div>
      </Col>
    )

    let content;
    if (this.props.imageOnLeft) {
      content = (
        <React.Fragment>
          {sectionImage}
          {sectionText}
        </React.Fragment>
      )
    } else {
      content = (
        <React.Fragment>
          {sectionText}
          {sectionImage}
        </React.Fragment>
      )
    }
    return (
      <Container id={this.props.id}>
        <Row className="featurette">
          {content}
        </Row>
      </Container>
    );
  }
}

