import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            item: ""
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({item: e.target.value});
    }
    
    handleSubmit(e) {
        this.props.handleSubmit(e, this.state.item)
        this.setState({item: ""});
    }
    
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <h2>Add New Item:</h2>
            <input 
                type="text"
                value={this.state.item}
                onChange={this.handleChange}
            />
          <button>Add</button>
      </form>
    );
  }
}

export default Form;
