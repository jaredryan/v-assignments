import React from 'react';

const Box = props => {
    return (
      <div 
            className="box" 
            style={props.style} 
            id={props.id}
      >
      </div>
    );
}

export default Box;
