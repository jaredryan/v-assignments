import React, { Component } from 'react';
import Grid from "./Grid";
import Buttons from "./Buttons";

class App extends Component {
    constructor() {
        super();
        this.state = {
            topLeft: "red",
            topRight: "blue",
            bottomLeft: "green",
            bottomRight: "grey"
        }
        
        this.turnWhite = this.turnWhite.bind(this)
        this.turnTopPurple = this.turnTopPurple.bind(this)
        this.turnBottomLeftBlue = this.turnBottomLeftBlue.bind(this)
        this.turnBottomRightBlue = this.turnBottomRightBlue.bind(this)
        this.topLeftReset = this.topLeftReset.bind(this)
        this.topRightReset = this.topRightReset.bind(this)
        this.bottomLeftReset = this.bottomLeftReset.bind(this)
        this.bottomRightReset = this.bottomRightReset.bind(this)
    }
    
    turnWhite() {
        this.setState({
            topLeft: "white",
            topRight: "white",
            bottomLeft: "white",
            bottomRight: "white"
        })
    }
    
    turnTopPurple() {
        this.setState({
            topLeft: "purple",
            topRight: "purple"
        })
    }
    
    turnBottomLeftBlue() {
        this.setState({
            bottomLeft: "blue"
        })
    }
    
    turnBottomRightBlue() {
        this.setState({
            bottomRight: "blue"
        })
    }
    
    topLeftReset() {
        this.setState({
            topLeft: "red"
        })
    }
    
    topRightReset() {
        this.setState({
            topRight: "blue"
        })
    }
    
    bottomLeftReset() {
        this.setState({
            bottomLeft: "green"
        })
    }
    
    bottomRightReset() {
        this.setState({
            bottomRight: "grey"
        })
    }
    
    
    
    
  render() {
    return (
      <div>
        <Grid 
            boxes={this.state}
        />
        <Buttons 
            turnWhite={this.turnWhite}
            turnTopPurple={this.turnTopPurple}
            turnBottomLeftBlue={this.turnBottomLeftBlue}
            turnBottomRightBlue={this.turnBottomRightBlue}
            topLeftReset={this.topLeftReset}
            topRightReset={this.topRightReset}
            bottomLeftReset={this.bottomLeftReset}
            bottomRightReset={this.bottomRightReset}
        />
      </div>
    );
  }
}

export default App;
