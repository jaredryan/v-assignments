import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            items: []
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const newItem = e.target.text.value;
        this.setState(prevState => {
            return {items: [...prevState.items, newItem]}
        });
        console.log(this.state.items);
    }
    
    handleChange(e) {
        this.setState(({[e.target.name]: e.target.value}));
    }
    
  render() {
      
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
            <input 
                type="text"
                name="text"
                onChange = {this.handleChange}
                value = {this.state.text}
            />
            <button>Submit</button>
        </form>
        <h1>{this.state.text}</h1>
        <div className="listWrapper">
            <ol>
                {this.state.items.map(elem => <li>{elem}</li>)}
            </ol>
        </div>
      </div>
    );
  }
}

export default App;
