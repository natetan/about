import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NavLink from 'react-bootstrap/NavLink';
import SectionFeature from '../SectionFeature/SectionFeature';
import strings from '../../resources/strings.json';
import { getRandomQuote } from '../../services/Quotes';
import h2p from 'html2plaintext';
import MilkyWay from '../../images/milky-way-cropped.png';
import Programming from '../../images/programming-langs.png';
import UWAerialView from '../../images/uw-aerial-view-cropped.jpg';
import UXBook from '../../images/ux-book.jpg';
import CodeBackground from '../../images/code-background-cropped.jpg';
import MotionStopSkate from '../../images/motion-stop-skate.png';

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
      content: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
      title: 'Bill Gates',
      link: 'https://www.toppr.com/bytes/quotes-by-bill-gates/'
    }

    let alaskaExperienceItems = strings.alaskaExperience.map((item, index) => {
      return <li key={index}>{item}</li>
    });

    let skills = strings.skills.map((item, index) => {
      return <li key={index}>{item}</li>
    });
    return (
      <section id="about" className="about-page text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">About</h2>
              <p className="text-white-50">{strings.about_2}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}