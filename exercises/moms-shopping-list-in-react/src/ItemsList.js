import React, { Component } from 'react';
import Item from './Item';

class ItemsList extends Component {

    const itemsList = this.props.items.map(item => {
        <Item name=item.name />
    });

  render() {
    return (
      <div className="itemsList">
        {itemsList}
      </div>
    );
  }
}

export default ItemsList;
