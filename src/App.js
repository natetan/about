import React from 'react';
import './App.css';
import AboutPage from './components/AboutPage/AboutPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import Navigation from './components/Navigation/Navigation';
import MastHead from './components/MastHead/MastHead';
import MainFooter from './components/MainFooter/MainFooter';

function App() {
  return (
    <div className="App" id='page-top'>
      <Navigation />
      <MastHead title='Nate Tan' subtitle={'Software Engineer'}/>
      <AboutPage />
      <ProjectsPage />
      <MainFooter />
    </div>
  );
}

export default App;
