import React from 'react';
import { connect } from 'react-redux';

const Timer = props => {
    return (
      <div className="timer">
        <h1>{props.hours}:{props.minutes > 9 ? props.minutes : "0" + props.minutes}:{props.seconds > 9 ? props.seconds : "0" + props.seconds}:{props.milliseconds > 9 ? props.milliseconds : "0" + props.milliseconds}</h1>
        <ul>
            {props.laps.map((lap, i) => {
                return <li key={i + lap}>{lap}</li>
            })}
        </ul>
      </div>
    );
}

export default connect(state => state, {})(Timer);
