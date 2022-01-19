import React, { Component } from 'react';
import axios from "axios";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import './App.css';
import constants from "./constants/constants"
import Loader from "./components/Loader/Loader";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: [{title: 'test', id: 10000, isChecked: false}]};
    }

    componentDidMount() {
        this.getDateFromApi();
    }

    addListItem = (values) => {
        this.setState(() => ({todos: [...this.state.todos, values]}))
    }
    removeListItem = (id) => {
        this.setState({todos: this.state.todos.filter(el => el.id !== id)});
    }

    changeChecked = (id) => {
        this.setState({
            todos: this.state.todos.map(el => el.id === id ? {
                ...el,
                isChecked: !el.isChecked
            } : el)
        });
    }

    getDateFromApi = async () => {
        try {
            const response = await axios.get(constants.url);
            this.setDateFromApi(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    setDateFromApi = (data) => {this.setState({todos : data})}

    render() {
        return (
            <div>
                {/*<Loader/>*/}
                <div className="mainWrapper">
                    <h1> Todo List</h1>
                    <Form addItem={this.addListItem}/>
                    <List todos={this.state.todos} changeTodo={this.changeChecked} deleteTodo={this.removeListItem}/>
                </div>
            </div>
        );
    }
}

export default App;
