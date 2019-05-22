import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import MainNav from './components/MainNav/MainNav';
import MainFooter from './components/MainFooter/MainFooter';

function App() {
  return (
    <div className="App">
      <MainNav />
      <HomePage />
      {/* <MainFooter /> */}
    </div>
  );
}

export default App;
