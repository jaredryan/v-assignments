import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timer from './Timer';
import Buttons from './Buttons';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Timer />
        <Buttons />
      </div>
    );
  }
}

export default connect(state => state, {})(App);
