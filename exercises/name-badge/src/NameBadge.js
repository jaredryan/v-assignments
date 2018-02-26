import React from 'react';

const NameBadge = props => {
    const style = {
        backgroundColor: props.index % 2 === 0 ? "pink" : "silver"
    }
    return (
        <div className="nameBadgeContainer" style={style}>
          <h2>Badge:</h2>
          <div className="nameBadge">
            <div>
                <h3>Name: {props.firstName} {props.lastName}</h3>
                <h3>Phone: {props.phone}</h3>
            </div>
            <br/>
            <div>
                <h3>Place of Birth: {props.birthplace}</h3>
                <h3>Favorite Food: {props.favFood}</h3>
            </div>
            <br/>
            <div>
                <h3>Email: {props.email}</h3>
            </div>
            <p className=".description">{props.description}</p>
          </div>
        </div>
    );
}

export default NameBadge;
