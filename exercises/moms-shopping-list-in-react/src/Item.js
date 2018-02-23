import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="item">
        <h4>{this.props.name}</h4>
        <button>Delete</button>
        <button>Completed</button>
        <button>Move to Top</button>
      </div>
    );
  }
}

export default Item;
