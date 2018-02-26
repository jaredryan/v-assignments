import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            birthplace: "",
            favFood: "",
            email: "",
            description: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkFieldLength = this.checkFieldLength.bind(this);
        this.isValidPhoneNumber = this.isValidPhoneNumber.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.checkFieldLength() && this.isValidPhoneNumber()) {
            this.props.handleSubmit({
                firstName: this.firstName,
                lastName: this.lastName,
                phone: this.phone,
                birthplace: this.birthplace,
                favFood: this.favFood,
                email: this.email,
                description: this.description
            });
            this.setState({
                firstName: "",
                lastName: "",
                phone: "",
                birthplace: "",
                favFood: "",
                email: "",
                description: "",
                message: ""
            });
        }
    }

    isNotEmpty() {
        for (let field in this.state) {
            if (this.state[field] === "") {
                return false;
            }
        }
        return true;
    }

    checkFieldLength() {
        for (let field in this.state) {
            if (this.state[field].length <= 3) {
                this.setState({
                    message: "Fields must contain at least 3 characters."
                });
                return false;
            }
        }
        return true;
    }

    isValidPhoneNumber() {
        if (this.state.phone.length !== 9) {
            this.setState({
                message: "Phone number must contain 9 digits."
            });
            return false;
        } else if (!/[0-9]/.test(this.state.phone)) {
            this.setState({
                message: "Phone number must only contain numbers."
            });
            return false;
        }
        return true;
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
            <div>
                <input type="text" onChange={this.handleChange} placeholder="First Name" name="firstName" value={this.state.firstName}/>
                <input type="text" onChange={this.handleChange} placeholder="Last Name" name="lastName" value={this.state.lastName}/>
            </div>
            <br/>
            <div>
                <input type="email" onChange={this.handleChange} placeholder="Email" name="email" value={this.state.email}/>
                <input type="text" onChange={this.handleChange} placeholder="Place of Birth" name="birthplace" value={this.state.birthplace}/>
            </div>
            <br/>
            <div>
                <input type="tel" onChange={this.handleChange} placeholder="Phone" name="phone" value={this.state.phone}/>
                <input type="text" onChange={this.handleChange} placeholder="Favorite Food" name="favFood" value={this.state.favFood}/>
            </div>
            <br/>
            <textarea onChange={this.handleChange} placeholder="Tell us about yourself" name="description" class="description">{this.state.description}</textarea>
            <br/>
            {this.state.message !== "" && <h3>{this.state.message}</h3>}
            {this.isNotEmpty() && <button>Submit</button>}
      </form>
    );
  }
}

export default Form;
