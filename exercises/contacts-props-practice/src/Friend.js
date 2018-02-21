import React, {Component} from 'react';
import Pet from './Pet';
import PropTypes from "prop-types";

class Friend extends Component {
    render(){
    const petList = this.props.pets.map((pet, index) => 
        <Pet 
            name={pet.name}
            breed={pet.breed}
            key={index + pet.name}
        />);
    
    return(
        <div className="friend">
            <h2>Name: <span>{this.props.name}</span></h2>
            <h3>Age: <span>{this.props.age}</span></h3>
            <h3>Pets:</h3>
            <ul>
                {petList}
            </ul>
        </div>
    )};
}

Friend.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    pets: PropTypes.shape({
        name: PropTypes.string.isRequired,
        breed: PropTypes.string
    })
};

export default Friend;
