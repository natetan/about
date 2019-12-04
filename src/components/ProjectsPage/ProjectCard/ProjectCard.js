import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CustomTag from '../../CustomTag/CustomTag';
import BigButton from '../../BigButton/BigButton';
import './ProjectCard.scss';

export default class ProjectCard extends Component {
  render() {
    let tagDisplay = '';
    if (this.props.project.tags) {
    tagDisplay = this.props.project.tags.map((t, i) => {
      return <CustomTag text={t} key={i}/>
    });
  }
    return (
      <div className='project-card'>
        <Card className='box-shadow'>
          <Card.Header>{this.props.project.blurb}</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.project.projectName}</Card.Title>
            <Card.Text>
              {this.props.project.desc}
            </Card.Text>
            <hr className="my-4" />
            <BigButton text='Learn More' href={this.props.project.url} />
          </Card.Body>
          <Card.Footer className='text-muted'>{tagDisplay}</Card.Footer>
        </Card>
      </div>
    )
  }
}