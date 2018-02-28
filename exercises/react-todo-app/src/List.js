import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    constructor() {
        super();
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }
    
    handleSearchInput(e) {
        this.props.handleSearchInput(e.target.value, e);
    }
    
    render() {
        const mapItems = arr => {
            return arr.map((item, i) => {
                return (<Item
                            id={item["_id"]}
                            title={item["title"]}
                            price={item["price"]}
                            description={item["description"]}
                            imgUrl={item["imgUrl"]}
                            completed={item["completed"]}
                            key={i+item["_id"]}
                            justPosted={item["justPosted"]}
                            index={i}
                            handleDelete={this.props.handleDelete}
                            toggleCompleted={this.props.toggleCompleted}
                            editItem={this.props.editItem}
                       />);
            })
        }
        
        const todoList = mapItems(this.props.items.filter(item => !item.completed));
        
        const completedList = mapItems(this.props.items.filter(item => item.completed));
                
        return (
          <div className="listPage">
            <h2>To-Do Items</h2>
            <div className="searchDiv">
                <h5>Search:</h5>
                <input type="search" value={this.props.searchBox} onChange={this.handleSearchInput}/>
            </div>
            <div className="list">
                {todoList}
            </div>
            <h2>Completed Items</h2>
            <div className="list">
                {completedList}
            </div>
            <button onClick={this.props.handleUndo}>Undo</button>
          </div>
        );
    }
}

export default List;
