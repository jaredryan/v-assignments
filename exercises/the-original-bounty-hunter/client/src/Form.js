import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            living: true,
            bountyAmount: "",
            type: "Jedi"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLivingChange = this.handleLivingChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addBounty(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            living: true,
            bountyAmount: "",
            type: "Jedi"
        })
    }
    
    handleLivingChange(e) {
        const living = e.target.value === "true"
        this.setState({
            living
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleChange}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleChange}
                    placeholder="Last Name"
                />
                <label>
                    <input
                        type="radio"
                        name="living"
                        value="true"
                        onChange={this.handleLivingChange}
                        checked={this.state.living === true}
                    />
                    Alive
                </label>
                <label>
                    <input
                        type="radio"
                        name="living"
                        value="false"
                        onChange={this.handleLivingChange}
                        checked={this.state.living === false}
                    />
                    Dead
                </label>
                <input
                    type="number"
                    value={this.state.bountyAmount}
                    name="bountyAmount"
                    onChange={this.handleChange}
                    placeholder="Reward"
                />
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="Jedi"
                        onChange={this.handleChange}
                        checked={this.state.type === "Jedi"}
                    />
                    Jedi
                </label>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="Sith"
                        onChange={this.handleChange}
                        checked={this.state.type === "Sith"}
                    />
                    Sith
                </label>
                <button>Add</button>
            </form>
        );
    }
}

export default Form;
