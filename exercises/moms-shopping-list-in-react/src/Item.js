import React from 'react';

const Item = props => {
    return (
      <div className="item">
        <h4>{props.item}</h4>
        <button onClick={e => props.handleDelete(e)}>Delete</button>
        <button onClick={e => props.handleCompleted(e)}>Completed</button>
        <button onClick={e => props.handleMoveToTop(e)}>Move to Top</button>
      </div>
    );
}

export default Item;
