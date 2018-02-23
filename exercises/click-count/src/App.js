import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
        
        this.addOne = this.addOne.bind(this);
        this.subtractOne = this.subtractOne.bind(this);
        this.divide2 = this.divide2.bind(this);
        this.multiply2 = this.multiply2.bind(this);
    }
    
    addOne() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    subtractOne() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    
    multiply2() {
        this.setState(prevState => {
            return {
                count: prevState.count * 2
            }
        })
    }
    
    divide2() {
        this.setState(prevState => {
            return {
                count: Math.floor(prevState.count / 2)
            }
        })
    }
    
  render() {
      const numStyle = {};
      if (this.state.count <= -10) {
          numStyle.color = "red";
      } else if (this.state.count < 0) {
          numStyle.color = "darkred";
      } else if (this.state.count === 0) {
          numStyle.color = "black";
      } else if (this.state.count < 10) {
          numStyle.color = "green";
      } else {
          numStyle.color = "lightgreen";
      }
      
      let feelings;
      if (this.state.count <= -10) {
         feelings = "ARE YOU TRYING TO KILL ME?!?";
      } else if (this.state.count < 0) {
         feelings = ":(";
      } else if (this.state.count === 0) {
         feelings = ":|";
      } else if (this.state.count < 10) {
         feelings = ":)";
      } else {
         feelings = "WOOOOOOOOOOO!!!";
      }
      
      const imgURL = {}
      if (this.state.count <= -10) {
         imgURL.background = `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url("http://www.heavennet.net/wp-content/uploads/2013/05/hellfire.jpg") no-repeat center center`;
      } else if (this.state.count < 0) {
          imgURL.background = `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url("http://www.vancitymommyd.com/wp-content/uploads/2018/01/sad-face-50-sad-face-pictures-art-and-design-history-clipart.jpeg") no-repeat center center`;
      } else if (this.state.count === 0) {
          imgURL.background = `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url("https://cdn.iwastesomuchtime.com/November-12-2013-11-58-16-tumblrmogwnwKzoM1rr6og1o1500.jpg") no-repeat center center`;
      } else if (this.state.count < 10) {
          imgURL.background = `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url("https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._SL1200_.jpg") no-repeat center center`;
      } else {
          imgURL.background = `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url("https://salemnet.vo.llnwd.net/media/cms/CW/faith/42598-heaven-gate-1200.1200w.tn.jpg") no-repeat center center`;
      }
      
    return (
        <div>
              <h2>I am the all-powerful click count. I am:</h2>
              <div className="counts" style={imgURL}>
                <button className="" onClick={this.divide2}>&divide;</button>
                <button className="minus" onClick={this.subtractOne}>-</button>
                <h1 style={numStyle}>{this.state.count}</h1>
                <button className="plus" onClick={this.addOne}>+</button>
                <button className="" onClick={this.multiply2}>&times;</button>
              </div>
              <h3>{feelings}</h3>
        </div>
    );
  }
}

export default App;
