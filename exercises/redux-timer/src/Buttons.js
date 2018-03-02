import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer, resetTimer, lap, toggleRunning } from './redux';

class Buttons extends Component {
    constructor() {
        super();
        this.handleStart = this.handleStart.bind(this);
    }

    handleStart() {
        if (!this.props.isRunning) {
            this.props.toggleRunning();
            setInterval(this.props.startTimer, 10);
        }
    }

    render() {
        return (
          <div className="timer">
            <button onClick={this.handleStart}>Start</button>
            <button onClick={this.props.stopTimer}>Stop</button>
            <button onClick={this.props.resetTimer}>Reset</button>
            <button onClick={this.props.lap}>Lap</button>
          </div>
        );
    }
}

export default connect(state => state, { startTimer, stopTimer, resetTimer, lap, toggleRunning })(Buttons);
