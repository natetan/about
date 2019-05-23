import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NavLink from 'react-bootstrap/NavLink';
import SectionFeature from '../SectionFeature/SectionFeature';
import strings from '../../resources/strings.json';
import { getRandomQuote } from '../../services/Quotes';
import h2p from 'html2plaintext';
import './AboutPage.scss';

export default class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: undefined
    };
  }

  componentDidMount() {
    // getRandomQuote().then((data) => {
    //   console.log(data);
    //   this.setState({ quote: data[0] });
    // })
  }

  render() {
    let staticQuote = {
      content: "If you're lucky enough to be different, don't ever change.",
      title: 'Taylor Swift',
      link: '#'
    }
    return (
      <div className='about-page'>
        <Jumbotron>
          <h1 className='main-title'>
            {`"${h2p(staticQuote.content)}"`}
          </h1>
          <NavLink href={'' + staticQuote.link} target='_blank'>
            <span>- </span>
            {`${staticQuote.title}`}
          </NavLink>
        </Jumbotron>
        <SectionFeature title={"Preface"} content={strings.preface} img='' />
        <hr />
        <SectionFeature imageOnLeft title={"Chapter I"} content={strings.chapter_1} img='' />
      </div>
    )
  }
}