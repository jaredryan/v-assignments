import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import FunResume from './FunResume';

class App extends Component {
  render() {      
    // General Organizations
      // My Projects
      // About Me
      // Resume
      // Links to LinkedIn and Github
      // Contact Info (Phone/Email)
      
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/fun/resume" component={FunResume}/>
            </Switch>
            <Footer />
        </div>
    );
  }
}

export default App;
