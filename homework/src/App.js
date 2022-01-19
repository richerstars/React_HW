import React, {Component} from 'react';
import axios from "axios";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import './App.css';
import constants from "./constants/constants"
import Loader from "./components/Loader/Loader";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isLoading: true
        };
    }

    componentDidMount() {
        setTimeout(this.getDateFromApi, 1000);
    }

    startLoader = () => {
        this.setState({isLoading: true})
    }
    stopLoader = () => {
        this.setState({isLoading: false})
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
            this.startLoader();
            const response = await axios.get(constants.url);
            this.setDateFromApi(response.data);
        } catch (error) {
            console.log(error)
        } finally {
            this.stopLoader();
        }
    }

    setDateFromApi = (data) => {
        this.setState({todos: data})
    }

    deleteDateFromApi = async(id) => {
        try {
            this.startLoader();
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${1}`);
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            this.stopLoader();
        }
    }

    render() {
        return (
            <div className="mainWrapper">
                <h1> Todo List</h1>
                <Form addItem={this.addListItem}/>
                {this.state.isLoading ?
                    <Loader/> :
                    <List todos={this.state.todos} changeTodo={this.changeChecked} deleteTodo={this.removeListItem}/>
                }
            </div>
        );
    }
}

export default App;
