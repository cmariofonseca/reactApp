import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Billboard from './components/Billboard';
import ShowMovie from './components/ShowMovie';
import logo from './logo.svg';

class App extends Component {

  render() {

    return (
      <div className="container">
        <Navbar title="Navigation" />
        <Jumbotron />
        <Billboard src={ logo } />
        <ShowMovie src={ logo } />
      </div>
    );

  }

}

export default App;
