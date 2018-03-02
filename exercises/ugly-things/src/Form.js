import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addUgly } from './redux';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            imgURL: "",
            description: ""
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
        this.props.addUgly({
            title: this.state.title,
            imgURL: this.state.imgURL,
            description: this.state.description,
            comments: []
        })
        this.setState({
            title: "",
            imgURL: "",
            description: ""
        })
    }
    
    
  render() {      
    return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
            <input type="text" name="imgURL" value={this.state.imgURL} onChange={this.handleChange} />
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
            <button>Submit</button>
        </form>
    );
  }
}

export default connect(state => state, { addUgly })(Form);
