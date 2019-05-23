import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ProjectCard.scss';

export default class ProjectCard extends Component {
  render() {
    return (
      <div className='project-card'>
        <Card className='box-shadow' border='success'>
          <Card.Header>{this.props.project.projectName}</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.project.blurb}</Card.Title>
            <Card.Text>
              {this.props.project.desc}
          </Card.Text>
            <Button variant="success" size="lg" href={this.props.project.url} target='_blank'>
              Learn more
            </Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}