import React, {Component} from 'react';
import Form from "./components/Form/Form";
import List from "./components/List/List";
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: [{value: 'test', id: 1, isChecked: false}]};
    }

    addListItem = (values) => {
        this.setState(() => ({todos: [...this.state.todos, values]}))
    }
    removeListItem = (id) => {
        this.setState({todos: this.state.todos.filter(el => el.id !== id)});
    }

    changeChecked = (id) => {
        this.setState({todos: this.state.todos.map(el => el.id === id ? {...el, isChecked: !el.isChecked} : el)});
    }

    render() {
        return (
            <div className="mainWrapper">
                <h1> Todo List</h1>
                <Form addItem={this.addListItem}/>
                <List todos={this.state.todos} changeTodo={this.changeChecked} deleteTodo={this.removeListItem}/>
            </div>
        );
    }
}

export default App;
