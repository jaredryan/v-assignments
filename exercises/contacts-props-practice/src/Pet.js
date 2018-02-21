import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Pet extends Component {
    render(){
        return (
            <li className="pet">
                <h4>{this.props.name}, a {this.props.breed}</h4>
            </li>
        );
    }
}

Pet.PropTypes = {
    name: PropTypes.string.isRequired,
    breed: PropTypes.string
}

export default Pet;
