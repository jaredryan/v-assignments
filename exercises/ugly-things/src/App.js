import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import Ugly from './Ugly';

class App extends Component {
    
  render() {      
      const uglyList = this.props.uglies.map((ugly, i) => {
          return <Ugly
                    title={ugly.title}
                    imgURL={ugly.imgURL}
                    description={ugly.description}
                    key={i + ugly.title}
                 />
      })
      
    return (
      <div className="App">
        <h1>Ugly Time!</h1>
        <h2>Submit New Ugly</h2>
        <Form />
        <h2>The Uglies</h2>
        {uglyList}
      </div>
    );
  }
}

export default connect(state => state, {})(App);
