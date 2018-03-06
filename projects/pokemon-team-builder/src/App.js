import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Pokedex from './Pokedex';
import SingleBattles from './SingleBattles';
import DoubleBattles from './DoubleBattles';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/pokedex" component={Pokedex}/>
            <Route path="/singlebattles" component={SingleBattles}/>
            <Route path="/doublebattles" component={DoubleBattles}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
