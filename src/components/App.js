import React, { Component } from 'react';
import './styles/App.css';
import HeaderMain from './markup/HeaderMain'
import Wrapper from './markup/Wrapper'
import Footer from './markup/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMain />
        <Wrapper />
        <Footer />
      </div>
    );
  }
}

export default App;