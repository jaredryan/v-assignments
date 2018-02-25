import React from 'react';
import Box from './Box';

const Grid = props => {
    console.log(props.boxes);
    const boxes = [];
    let style;
    for (let boxPos in props.boxes) {
        style = {backgroundColor: props.boxes[boxPos]}
        boxes.push(<Box
                        id={boxPos}
                        style={style}
                        key={boxPos}
                   />)
    };

    return (
      <div className="grid">
        {boxes}
      </div>
    );
}

export default Grid;
