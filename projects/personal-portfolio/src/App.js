import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home'

class App extends Component {
  render() {
      // const projects = [
      //     {
      //         name: "Fishackathon",
      //         description: "",
      //         images: []
      //     },
      //     {
      //         name: "OpenHouse",
      //         description: "",
      //         images: []
      //     },
      // ];
      

    // General Organizations
      // My Projects
      // About Me
      // Resume
      // Links to LinkedIn and Github
      // Contact Info (Phone/Email)
      
      
      // <Route path="/projects" component={Projects}/>
      // <Route path="/about" component={About}/>
      // <Route path="/resume" component={Resume}/>
      
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                
            </Switch>
            <Footer />
        </div>
    );
  }
}

export default App;
