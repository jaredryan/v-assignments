import React, { Component } from 'react';
import Form from './Form';
import NameBadge from './NameBadge';

class App extends Component {
    constructor() {
        super();
        this.state = {
            badges: []
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(badge) {
        this.setState(prevState => {
            return {
                badges: [...prevState.badges, badge]
            }
        });
    }
    
    
    
  render() {
      const mappedBadges = this.state.badges.map((badge, index) => {
          return <NameBadge
                    firstName={badge.firstName}
                    lastName={badge.lastName}
                    phone={badge.phone}
                    birthplace={badge.birthplace}
                    favFood={badge.favFood}
                    email={badge.email}
                    description={badge.description}
                    index={index}
                    key={index + badge.name}
                 />
      });
    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit}/>
        {mappedBadges}
      </div>
    );
  }
}

export default App;
