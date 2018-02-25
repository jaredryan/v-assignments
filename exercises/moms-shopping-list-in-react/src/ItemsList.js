import React from 'react';
import Item from './Item';
import CompletedItem from './CompletedItem'

const ItemsList = props => {    
    const itemsList = props.items.map(item => {
        return <Item 
                    item={item} 
                    handleDelete={props.handleDelete}
                    handleMoveToTop={props.handleMoveToTop}
                    handleCompleted={props.handleCompleted}
                />
    });
    
    const completedList = props.completed.map(item => {
        return <CompletedItem item={item} />
    });

    return (
      <div className="itemsList">
        <h2>Todo List:</h2>
        {itemsList}
        <button onClick={props.handleClear}>Clear</button>
        <h2>Completed List:</h2>
        {completedList}
        <button onClick={props.handleCompletedClear}>Clear</button>
      </div>
    );
}

export default ItemsList;
