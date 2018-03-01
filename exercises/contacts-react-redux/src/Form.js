import React, { Component } from 'react';
import { addPerson } from './redux';
import { connect } from 'react-redux';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            phone: "",
            email: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addPerson(this.state);
        this.setState({
            name: "",
            phone: "",
            email: ""
        })
    }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        <input type="tel" name="phone" value={this.state.phone} onChange={this.handleChange}/>
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
        <button>Add Contact</button>
      </form>
    );
  }
}

export default connect(state => state, { addPerson })(Form);
