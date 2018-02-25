import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            color: ""
        }
        
        this.newColor = this.newColor.bind(this);
    }
    
    componentDidMount() {
        axios.get("http://www.colr.org/json/color/random").then(response => {
            this.setState({
                backgroundColor: "#" + response.data.new_color
            });
        });
    }
    
    newColor() {
        console.log("bananas");
        axios.get("http://www.colr.org/json/color/random").then(response => {
            this.setState({
                backgroundColor: "#" + response.data.new_color
            });
        });
    }
    
  render() {
    return (
        <div>
          <div className="App" style={this.state}></div>
          <button onClick={this.newColor}>New Color!</button>
        </div>
    );
  }
}

export default App;
