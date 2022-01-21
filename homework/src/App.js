import React, { Component } from 'react';
import axios from "axios";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import './App.css';
import constants from "./constants/urls";
import numberConstants from "./constants/numberConstants";
import Loader from "./components/Loader/Loader";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        setTimeout(this.getDateFromApi, numberConstants.timeoutToGetApi);
    }

    startLoader = () => {
        this.setState({isLoading: true});
    };

    stopLoader = () => {
        this.setState({isLoading: false});
    };

    addListItem = (values) => {
        this.setState(() => ({todos: [...this.state.todos, values]}));
    };

    removeListItem = (id) => {
        this.setState({todos: this.state.todos.filter(el => el.id !== id)});
    };

    changeChecked = (id) => {
        this.setState({
            todos: this.state.todos.map(el => el.id === id ? {
                ...el,
                isChecked: !el.isChecked,
            } : el)
        });
    };

    getDateFromApi = async () => {
        try {
            this.startLoader();
            const response = await axios.get(`${constants.Url}?_limit=10`);
            this.setState({todos: response.data});
        } finally {
            this.stopLoader();
        }
    };

    deleteDateFromApi = async (id) => {
        try {
            this.startLoader();
            await axios.delete(`${constants.Url}/${id}`);
            this.removeListItem(id);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        } finally {
            this.stopLoader();
        }
    };
    changeDateFromApi = async (id) => {
        try {
            this.startLoader();
            await axios.put(`${constants.Url}/${id}`, this.state.isLoading);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        } finally {
            this.changeChecked(id);
            this.stopLoader();
        }
    };

    addDateToApi = async (value) => {
        try {
            this.startLoader();
            await axios.post(constants.Url, value);
            this.addListItem(value);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        } finally {
            this.stopLoader();
        }
    };

    render() {
        return (
            <div className="mainWrapper">
                <h1> Todo List</h1>
                <Form addItem={this.addDateToApi}/>
                {this.state.isLoading
                    ? <Loader/>
                    : this.state.todos.length
                        ? <List todos={this.state.todos}
                            changeTodo={this.changeDateFromApi}
                            deleteTodo={this.deleteDateFromApi}/>
                        : <div> Sry, no data</div>
                }
            </div>
        );
    }
}

export default App;
