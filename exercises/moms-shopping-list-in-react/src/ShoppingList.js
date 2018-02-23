import React, { Component } from 'react';
import Form from './Form';
import ItemsList from './ItemsList';

class ShoppingList extends Component {
  render() {
    return (
      <div>
            <Form />
            <ItemsList />
      </div>
    );
  }
}

export default ShoppingList;
