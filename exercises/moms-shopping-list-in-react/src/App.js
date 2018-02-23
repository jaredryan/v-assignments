import React, { Component } from 'react';
import ShoppingList from './ShoppingList';
import Form from './Form';
import ItemsList from './ItemsList';

class App extends Component {
    constructor() {
        super();
        this.state {
            items: []
        }
    }
    
  render() {
    return (
      <div>
        <ShoppingList items=this.state.items/>
      </div>
    );
  }
}

export default App;
