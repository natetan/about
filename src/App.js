import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import MainNav from './components/MainNav/MainNav';
import { Redirect, Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/about"} component={AboutPage} />
        <Redirect to={"/"} />
      </Switch>

      {/* <MainFooter /> */}
    </div>
  );
}

export default App;
