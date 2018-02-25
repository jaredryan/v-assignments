import React from 'react';

const CompletedItem = props => {
    return (
      <div className="item">
        <h4>{props.item}</h4>
      </div>
    );
}

export default CompletedItem;
