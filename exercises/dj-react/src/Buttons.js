import React from 'react';

const Buttons = props => {
    return (
      <div className="buttons">
        <button onClick={props.turnWhite}>Turn White</button>
        <button onClick={props.turnTopPurple}>Turn Top Purple</button>
        <button onClick={props.turnBottomLeftBlue}>Turn Bottom Left Blue</button>
        <button onClick={props.turnBottomRightBlue}>Turn Bottom Right Blue</button>
        <br/>
        <button onClick={props.topLeftReset}>Top Left Default</button>
        <button onClick={props.topRightReset}>Top Right Default</button>
        <button onClick={props.bottomLeftReset}>Bottom Left Default</button>
        <button onClick={props.bottomRightReset}>Bottom Right Default</button>
      </div>
    );
}

export default Buttons;
