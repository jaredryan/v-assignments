import React, { Component } from 'react';
import Bounty from './Bounty';
import Form from './Form';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            allBounties: [],
            isFormOpen: false
        }
        
        this.mapBounties = this.mapBounties.bind(this);
        this.handleFormClick = this.handleFormClick.bind(this);
        this.addBounty = this.addBounty.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.editBounty = this.editBounty.bind(this);
    }
    
    componentDidMount() {
        axios.get("/bounties").then(response => {
            this.setState({
                allBounties: response.data
            })
        });
    }
    
    handleFormClick() {
        this.setState(prevState => {
            return {
                isFormOpen: !prevState.isFormOpen
            }
        })
    }
    
    addBounty(item) {
        axios.post("/bounties", item).then(response => {
            this.setState(prevState => {
                return {
                    allBounties: [response.data, ...prevState.allBounties]
                }
            })
        })
    }
    
    editBounty(item) {
        axios.put("/bounties/" + item.id, item).then(response => {
            this.setState(prevState => {
                const allBounties = prevState.allBounties.slice();
                const bounty = allBounties.find(bounty => bounty.id === item.id)
                for (let property in item) {
                    bounty[property] = item[property]
                }
                return {
                    allBounties
                }
            })
        })
    }
    
    handleDelete(id) {
        axios.delete("/bounties/" + id).then(response => {
            this.setState(prevState => {
                const allBounties = prevState.allBounties.slice();
                const bountyIndex = allBounties.findIndex(bounty => bounty.id === id);
                allBounties.splice(bountyIndex, 1);
                return {
                    allBounties
                }
            })
        })
    }
    
    mapBounties(list) {
        return list.map((bounty, i) => {
            return (<Bounty
                        firstName={bounty.firstName}
                        lastName={bounty.lastName}
                        living={bounty.living}
                        bountyAmount={bounty.bountyAmount}
                        type={bounty.type}
                        id={bounty.id}
                        key={bounty.id}
                        handleDelete={this.handleDelete}
                        editBounty={this.editBounty}
                   />);
        });
    }
    
  render() {
      const livingBounties = this.mapBounties(this.state.allBounties.filter(bounty => bounty.living));
      const claimedBounties = this.mapBounties(this.state.allBounties.filter(bounty => !bounty.living));
      
    return (
      <div className="App">
        <h1>Bounty List</h1>
        {this.state.isFormOpen ? 
            <div>
                <button onClick={this.handleFormClick}>Close Form</button>
                <Form addBounty={this.addBounty}/>
            </div>
            :
            <div>
                <button onClick={this.handleFormClick}>Submit New Bounty</button>
            </div>
        }
        <h2>To Do</h2>
        {livingBounties}
        <h2>Completed</h2>
        {claimedBounties}
      </div>
    );
  }
}

export default App;
