import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addIssue } from './redux';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.addIssue(this.state);
        this.setState({
            title: "",
            description: ""
        });
    }
    
    // () {
    // 
    // }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={this.handleChange}
                    value={this.state.title}
                />
                <input 
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={this.handleChange}
                    value={this.state.description}
                />
                <button>Submit</button>
            </form>
        );
    };
}

export default connect(state => state, { addIssue })(Form)
