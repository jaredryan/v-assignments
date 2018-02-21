import React from "react";

const Vacation = (props) => {
    const img = {
        backgroundImage: `url(${props.imgURL})`
    }

    let dollarSigns;
    if (props.price < 500) {
        dollarSigns = "$";
    } else if (props.price < 1000) {
        dollarSigns = "$$";
    } else {
        dollarSigns = "$$$";
    }

    let backgroundColor;
    if (props.timeToGo === "Summer") {
        backgroundColor = "yellow";
    } else if (props.timeToGo === "Spring") {
        backgroundColor = "lightgreen";
    } else if (props.timeToGo === "Winter") {
        backgroundColor = "lightblue";
    } else {
        backgroundColor = "orange";
    }

    const color = {
        backgroundColor
    }


    return(
        <div className="vacation" style={color}>
            <h1>{props.place}</h1>
            <h3 className="price">Price: <span>{dollarSigns}</span></h3>
            <h3 className="season">Best Season: <span>{props.timeToGo}</span></h3>
            <div style={img}></div>
        </div>
    )
}

export default Vacation;
