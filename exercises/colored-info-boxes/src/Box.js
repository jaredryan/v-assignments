import React from 'react';

const Box = (props) => {

    const colors = {
        backgroundColor: props.bcolor,
        color: props.fcolor
    }

    const img = {
        backgroundImage: `url(${props.img})`
    }

    return (
        <div className="box" style={colors}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <div style={img}></div>
            <p>{props.info}</p>
        </div>
    );
}

export default Box;
