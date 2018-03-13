import React, { Component } from 'react';

class EditBountyForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            living: "",
            bountyAmount: "",
            type: "",
            _id: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLivingChange = this.handleLivingChange.bind(this);
    }
    
    componentDidMount() {
        this.setState({
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            living: this.props.living,
            bountyAmount: this.props.bountyAmount,
            type: this.props.type,
            _id: this.props._id
        });
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.editBounty(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            living: "",
            bountyAmount: "",
            type: ""
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
                <button>Save</button>
            </form>
        );
    }
}

export default EditBountyForm;
