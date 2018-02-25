import React, { Component } from 'react';
import Form from './Form';
import ItemsList from './ItemsList';

class ShoppingList extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            completed: []
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
        this.handleMoveToTop = this.handleMoveToTop.bind(this);
        this.handleCompletedClear = this.handleCompletedClear.bind(this);
    }
    
    handleSubmit(e, newItem) {
        e.preventDefault();
        this.setState(prevState => {
            return {
                items: [...prevState.items, newItem]
            }
        });
    }
    
    handleDelete(e) {
        const item = e.currentTarget.parentElement.children[0].textContent;
        this.setState(prevState => {
            const index = prevState.items.indexOf(item);
            return {
                items: [...prevState.items.slice(0, index), ...prevState.items.slice(index + 1)]
            }
        })
    }
    
    handleClear() {
        this.setState({items: []});
    }
    
    handleCompleted(e) {
        const item = e.currentTarget.parentElement.children[0].textContent;
        this.setState(prevState => {
            const index = prevState.items.indexOf(item);
            return {
                items: [...prevState.items.slice(0, index), ...prevState.items.slice(index + 1)],
                completed: [...prevState.completed, item]
            }
        })
    }
    
    handleMoveToTop(e) {
        const item = e.currentTarget.parentElement.children[0].textContent;
        this.setState(prevState => {
            const index = prevState.items.indexOf(item);
            return {
                items: [item, ...prevState.items.slice(0, index), ...prevState.items.slice(index + 1)]
            }
        })
    }
    
    handleCompletedClear() {
        this.setState({completed: []});
    }
    
  render() {
    return (
      <div>
            <Form handleSubmit={this.handleSubmit}/>
            <ItemsList 
                items={this.state.items} 
                completed={this.state.completed}
                handleDelete={this.handleDelete}
                handleMoveToTop={this.handleMoveToTop}
                handleCompleted={this.handleCompleted}
                handleClear={this.handleClear}
                handleCompletedClear={this.handleCompletedClear}
            />
      </div>
    );
  }
}

export default ShoppingList;
