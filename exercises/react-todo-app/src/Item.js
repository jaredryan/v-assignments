import React, { Component } from 'react';
import EditItem from "./EditItem";

class Item extends Component {
    constructor() {
        super();
        this.state = {
            completed: false,
            expanded: false,
            editting: false
        }
        
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleDescription = this.toggleDescription.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
        this.toggleEditting = this.toggleEditting.bind(this);
    }
    
    deleteItem() {
        this.props.handleDelete(this.props.id);
    }
    
    toggleDescription() {
        this.setState(prevState => {
            return {
                expanded: !prevState.expanded
            }
        });
    }
    
    componentDidMount() {
        this.setState({completed: this.props.completed});
    }
    
    toggleCompleted() {
        this.setState(prevState => {
            this.props.toggleCompleted(this.props.id, !prevState.completed)
            return {
                completed: !prevState.completed
            };
        })
    }
    
    toggleEditting() {
        this.setState(prevState => {
            return {
                editting: !prevState.editting
            };
        })
    }

    
    render(){
        const style = (this.props.justPosted && this.props.index === 0) ? 
                            {backgroundColor: "pink"} :
                            this.props.index % 2 === 0 ? 
                                {backgroundColor: "silver"} :
                                {backgroundColor: "white"};
        
        const item = (<div className="item" style={style}>
                      <h3>{this.props.title}</h3>
                      <img src={this.props.imgUrl} alt=""/>
                      <h4>Price: ${this.props.price || "0"}</h4>
                      {this.props.description !== "" && 
                          (this.state.expanded ? 
                              <div onClick={this.toggleDescription} className="toggleTarget">
                                  <h5>Description: </h5>
                                  <h5>{this.props.description}</h5>
                                  <h6>(Click to close)</h6>
                              </div>
                              :
                              <div onClick={this.toggleDescription} className="toggleTarget">
                                  <h5>Description: </h5>
                                  <h6>(Click to expand)</h6>
                              </div>
                          )
                      }
                      <button onClick={this.toggleEditting}>Edit</button>
                      <button onClick={this.deleteItem}>Delete</button>
                      <h6>Completed: {
                          this.state.completed ? 
                              <input type="checkbox" checked onClick={this.toggleCompleted}/>
                              :
                              <input type="checkbox" onClick={this.toggleCompleted}/>
                      }
                      </h6>
                    </div>
                );
        const form = (<EditItem 
            id={this.props.id}
            title={this.props.title}
            price={this.props.price}
            description={this.props.description}
            imgUrl={this.props.imgUrl}
            editItem={this.props.editItem}
            toggleEditting={this.toggleEditting}
            style={style}
        />);
        
        return this.state.editting ? form : item;
    }
}

export default Item;
