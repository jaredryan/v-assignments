import React, { Component } from 'react';
import { removePerson } from './redux';
import { connect } from 'react-redux';

class Person extends Component {
    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    handleDelete() {
        console.log(this.props);
        this.props.removePerson({
            name: this.props.name,
            phone: this.props.phone,
            email: this.props.email
        });
    }
    
    render() {
        return (
            <div className="person">
                <h1>{this.props.name}</h1>
                <h3>{this.props.phone}</h3>
                <h3>{this.props.email}</h3>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default connect(state => state, { removePerson })(Person);
