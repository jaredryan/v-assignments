import React from 'react';

const Target = props => {
    console.log(props);
    const style = {
        backgroundImage: `url(${props.image})`
    };
    return(
        <div className="target">
            <div style={style}></div>
            <h3>{props.name}</h3>
        </div>
    )
}

export default Target;
