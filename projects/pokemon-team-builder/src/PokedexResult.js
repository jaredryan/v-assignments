import React from 'react';

const PokedexResult = props => {
    console.log(props)
    return (
      <div className="pokedexResult">
        <h3>{props.name}</h3>
      </div>
    );
};

export default PokedexResult;
