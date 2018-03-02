import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeUgly } from './redux';

class Ugly extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            newComment: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeComment = this.removeComment.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState(prevState => {
            return {
                comments: [...prevState.comments, prevState.newComment],
                newComment: ""
            }
        })
    }

    removeComment(e) {
        const targetComment = e.target.parentElement.children[0].textContent;
        this.setState(prevState => {
            const comments = prevState.comments.slice();
            const index = comments.findIndex(comment => comment === targetComment);
            comments.splice(index, 1);
            return {
                comments
            }
        })
    }

    handleDelete() {
        this.props.removeUgly({
            title: this.props.title,
            imgURL: this.props.imgURL,
            description: this.props.description
        });
    }

    render() {
          const mappedComments = this.state.comments.map((comment, i) => {
              return (<li key={i + comment}>
                        <p>{comment}</p>
                        <button onClick={this.removeComment}>x</button>
                    </li>);
          });

        return (
          <div className="ugly">
            <h2>{this.props.title}</h2>
            <h2>{this.props.imgURL}</h2>
            <h2>{this.props.description}</h2>
            <ul>
                {mappedComments}
            </ul>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.newComment} name="newComment" onChange={this.handleChange}/>
                <button>Post</button>
            </form>
            <button onClick={this.props.removeUgly}>Delete</button>
          </div>
        );
    }
}

export default connect(state => state, { removeUgly })(Ugly);
