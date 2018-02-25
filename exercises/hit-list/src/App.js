import React, { Component } from 'react';
import axios from 'axios';
import Target from './Target';

class App extends Component {
    constructor() {
        super();
        this.state = {
            targets: []
        }
    }
    
  componentDidMount() {
      axios.get("http://api.vschool.io:6543/hitlist.json").then(response => {
          this.setState({targets: response.data});
      });
  }
  
  render() {
     const theList = this.state.targets.map((elem, i) => {
          return <Target 
              name={elem.name} 
              image={elem.image} 
              key={i + elem.name}
          />
    });
      
    return (
      <div>
        <nav>
            <div></div>
            <h1>Don Carleone's Hit List</h1>
        </nav>
        
        <ul>
            {theList}
        </ul>
      </div>
    );
  }
}

export default App;
