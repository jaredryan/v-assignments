import React, { Component } from 'react';
import axios from 'axios';

class TodoList extends Component {
    componentDidMount() {
        axios.get("https://swapi.co/api/people/").then(response => console.dir(response.data));
    }

    render(){
        return (
          <div>
            TodoList
          </div>
        );
    }
}

export default TodoList;
