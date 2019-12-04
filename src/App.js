import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import MainNav from './components/MainNav/MainNav';
import Navigation from './components/Navigation/Navigation';
import MastHead from './components/MastHead/MastHead';
import MainFooter from './components/MainFooter/MainFooter';
import { Redirect, Route, Switch } from "react-router";

function App() {
  return (
    <div className="App" id='page-top'>
      <Navigation />
      <MastHead title='Nate Tan' subtitle={'Aspiring Web Developer'}/>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/about"} component={AboutPage} />
        <Route path={"/projects"} component={ProjectsPage} />
        <Redirect to={"/"} />
      </Switch>
      <MainFooter />
    </div>
  );
}

export default App;
