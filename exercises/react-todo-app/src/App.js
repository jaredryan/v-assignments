import React, { Component } from 'react';
import axios from 'axios';
import {Switch, Route, Link} from 'react-router-dom';
import Footer from './Footer';
import List from './List';
import NewItem from './NewItem';

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            displayedItems: [],
            lastDeleted: [],
            searchBox: ""
        }
        
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUndo = this.handleUndo.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
        this.editItem = this.editItem.bind(this);
    }
    
    componentDidMount() {
        axios.get("https://api.vschool.io/jared/todo").then(response => {
            this.setState({
                items: response.data,
                displayedItems: response.data
            });
        });
    }
    
    handleSearchInput(searchInput, e) {
        if (searchInput === "") {
            this.setState({
                searchBox: searchInput,
                displayedItems: this.state.items
            });
        } else {
            const displayedItems = this.state.items.filter(item => {
                return ((item["description"] && item["description"].toLowerCase().includes(searchInput)) || item["title"].toLowerCase().includes(searchInput))
            });
            this.setState({
                displayedItems,
                searchBox: searchInput
            });
        }
    }
    
    handleSubmit(item) {
        axios.post("https://api.vschool.io/jared/todo", item).then(response => {
            this.setState(prevState => {
                response.data.justPosted = true;
                const updateOldItems = prevState.items.map(item => {
                    return {
                        ...item,
                        justPosted: false
                    }
                });
                const items = [response.data, ...updateOldItems]
                let displayedItems;
                if (this.state.searchBox === "") {
                    displayedItems = items;
                } else {
                    displayedItems = items.filter(item => {
                        return ((item["description"] && item["description"].toLowerCase().includes(this.state.searchBox)) || item["title"].toLowerCase().includes(this.state.searchBox))
                    });
                }
                return {
                    items,
                    displayedItems
                }
            });
        });
    }
    
    handleDelete(id) {
        axios.delete("https://api.vschool.io/jared/todo/" + id).then(response => {
            this.setState(prevState => {
                const index = prevState.items.findIndex(item => item._id === id);
                const displayedIndex = prevState.displayedItems.findIndex(item => item._id === id);
                const deletedItem = prevState.items.find(item => item._id === id);
                return {
                    items: [...prevState.items.slice(0, index), ...prevState.items.slice(index + 1)],
                    displayedItems: [...prevState.displayedItems.slice(0, displayedIndex), ...prevState.displayedItems.slice(displayedIndex + 1)],
                    lastDeleted: [deletedItem, ...prevState.lastDeleted]
                }
            })
        })
    }
    
    handleUndo() {
        if (this.lastDeleted !== []) {
            const toPutBack = this.state.lastDeleted[0];
            axios.post("https://api.vschool.io/jared/todo/", toPutBack);
            this.setState(prevState => {
                const items = [toPutBack, ...prevState.items]
                let displayedItems;
                if (this.state.searchBox === "") {
                    displayedItems = items;
                } else {
                    displayedItems = items.filter(item => {
                        return ((item["description"] && item["description"].toLowerCase().includes(this.state.searchBox)) || item["title"].toLowerCase().includes(this.state.searchBox))
                    });
                }
                return {
                    items,
                    displayedItems,
                    lastDeleted: prevState.lastDeleted.slice(1)
                }
            });
        }
    }
    
    toggleCompleted(id, completed) {
        axios.put("https://api.vschool.io/jared/todo/" + id, {completed}).then(response => {
            const items = this.state.items.slice();
            items.find(item => item._id === id).completed = completed;
            const displayedItems = this.state.displayedItems.slice();
            displayedItems.find(item => item._id === id).completed = completed;
            this.setState({
                items,
                displayedItems
            })            
        });
    }
    
    editItem(id, item) {
        axios.put("https://api.vschool.io/jared/todo/" + id, item).then(response => {
            const items = this.state.items.slice();
            const displayedItems = this.state.displayedItems.slice();
            const item = items.find(item => item._id === id);
            const displayItem = displayedItems.find(item => item._id === id);
            for (let property in response.data) {
                item[property] = response.data[property];
                displayItem[property] = response.data[property];
            }
            this.setState({
                items,
                displayedItems
            })            
        });
    }
    
    render(){
        const propsList = () => {
            return (<List 
                        searchBox={this.state.searchBox}
                        handleSearchInput={this.handleSearchInput}
                        handleDelete={this.handleDelete}
                        handleUndo={this.handleUndo}
                        toggleCompleted={this.toggleCompleted}
                        items={this.state.displayedItems}
                        editItem={this.editItem}
                   />);
        }
        
        const newItemForm = () => <NewItem handleSubmit={this.handleSubmit}/>;
        
        return (
            <div className="app">
                  <h1>To-Do List</h1>
                  <div className="tabs">
                      <Link to="/list">List</Link>
                      <Link to="/newitem">Add Item</Link>
                  </div>
                  <Switch>
                      <Route exact path="/list" render={propsList}/>
                      <Route path="/newitem" render={newItemForm}/>
                  </Switch>
                  <Footer />
            </div>
        );
    }
}

export default App;
