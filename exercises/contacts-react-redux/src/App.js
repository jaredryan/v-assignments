import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from './Person';
import Form from './Form';

class App extends Component {
  render() {
      const mappedPeople = this.props.people.map((person, i) => {
          return <Person
                      name={person.name}
                      phone={person.phone}
                      email={person.email}
                      key={i + person.name}
                 />
      });
      
    return (
      <div className="App">
        <ul>
            {mappedPeople}
        </ul>
        <Form />
      </div>
    );
  }
}

export default connect(state => state, {})(App);
