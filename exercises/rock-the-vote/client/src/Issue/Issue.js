import React, {Component} from 'react';
import EditForm from '../EditForm';

const Issue = props => {
    return(
        <div className="issue">
            {props.isBeingEdited ? 
                <EditForm 
                    title={props.title}
                    description={props.description}
                    _id={props._id}
                    handleCloseForm={props.handleCloseForm}
                />
                :
                <div className="issueInfo">
                    <div>
                        <h1>{props.title}</h1>
                        <button onClick={props.handleMinusVote}>-</button>
                        <button onClick={props.handlePlusVote}>+</button>
                    </div>
                    <h2>{props.description}</h2>
                    <h3>Votes: {props.votes}</h3>
                    {props.commentList}
                    <form onSubmit={props.addComment}>
                            <input
                                type="text"
                                value={props.newComment}
                                name="newComment"
                                placeholder="New Comment"
                                onChange={props.handleChange}
                            />
                            <button type="submit">Post</button>
                    </form>
                    <button onClick={props.handleOpenForm}>Edit</button>
                    <button onClick={props.handleDelete}>Delete</button>
                </div>
            }
        </div>
    );
}

export default Issue;
