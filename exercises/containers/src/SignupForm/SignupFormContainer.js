import React, { Component } from 'react';
import SignupForm from './SignupForm';

class SignupFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        alert("Thanks for submitting!")
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


  render() {
    return (
      <SignupForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            {...this.state}
        />
    );
  }
}

export default SignupFormContainer;
