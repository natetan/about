import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from './ProjectCard/ProjectCard';
import strings from '../../resources/strings.json';
import './ProjectsPage.scss';

export default class ProjectsPage extends Component {
  render() {
    let projects = Object.keys(strings.projects).map((item, index) => {
      return (
        <Col md={4} key={index}>
          <ProjectCard project={strings.projects[item]} />
        </Col>
      )
    });
    return (
      <div className='projects-page'>
        <div className="header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Projects</h1>
          <p className="lead subtitle">
            I will showcase some of my more prominent projects here, but all of these can also be found on my <a href={strings.urls.github} target='_blank' rel='noopener noreferrer'>GitHub.</a>
          </p>
        </div>
        <Container>
          <Row>
            {projects}
          </Row>
        </Container>
      </div>
    )
  }
}