import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export default class MainFooter extends Component {
  render() {
    return (
      <Container>
        <footer>
          <small className="d-block mb-3 text-muted">© Yulong Tan 2019</small>
        </footer>
      </Container>
    )
  }
}