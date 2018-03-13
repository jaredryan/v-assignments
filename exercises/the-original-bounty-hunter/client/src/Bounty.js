import React, { Component } from 'react';
import EditBountyForm from './EditBountyForm';

class Bounty extends Component {
    constructor() {
        super();
        this.state = {
            isEditting: false
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit() {
        this.setState(prevState => {
            return {
                isEditting: !prevState.isEditting
            }
        })
    }
    
    handleDelete() {
        this.props.handleDelete(this.props._id);
    }

    render() {
        return(
            <div>
                <h3>{this.props.firstName} {this.props.lastName}</h3>
                <h4>Reward: {this.props.bountyAmount}</h4>
                <h5>Affiliation: {this.props.type}</h5>
                {this.state.isEditting ? 
                    <div>
                        <EditBountyForm 
                            firstName={this.props.firstName}
                            lastName={this.props.lastName}
                            living={this.props.living}
                            bountyAmount={this.props.bountyAmount}
                            type={this.props.type}
                            _id={this.props._id}
                            editBounty={this.props.editBounty}
                            key={this.props._id + this.props.firstName}
                        />
                        <button onClick={this.handleEdit}>Close</button>
                    </div>
                    :
                    <button onClick={this.handleEdit}>Edit</button>
                }
                <button onClick={this.handleDelete}>Terminate</button>
            </div>
        )
    }
}

export default Bounty;
