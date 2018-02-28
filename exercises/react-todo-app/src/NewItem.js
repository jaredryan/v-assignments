import React, { Component } from 'react';

class NewItem extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            price: "",
            description: "",
            imgUrl: "",
            message: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        // Do checks here and now
        if (this.state.title === "") {
            this.setState({message: "A title is required."})
        } else {
            this.props.handleSubmit({
                title: this.state.title,
                price: this.state.price,
                description: this.state.description,
                imgUrl: this.state.imgUrl
            });       
            this.setState({
                title: "",
                price: "",
                description: "",
                imgUrl: ""
            });
        }
    }
    
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    
    render() {
        return (
              <form onSubmit={this.handleSubmit} className="newItemForm">
                    <h4>Add Item Information:</h4>
                    <input type="text" value={this.state.title} onChange={this.handleChange} name="title" placeholder="Title"/>
                    <input type="number" value={this.state.price} onChange={this.handleChange} name="price" placeholder="Price"/>
                    <input type="url" value={this.state.imgUrl} onChange={this.handleChange} name="imgUrl" placeholder="Image Url"/>
                    <textarea value={this.state.description} onChange={this.handleChange} name="description" placeholder="Description"/>
                    <button>Add Item</button>
                    {this.state.message !== "" && <h5>{this.state.message}</h5>}
              </form>
        );
    }
}

export default NewItem;
