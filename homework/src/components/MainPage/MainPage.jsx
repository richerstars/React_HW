import React, { Component } from 'react';
import axios from "axios";
import Loader from "../Loader/Loader";
import Header from "./Header/Header";
import Rows from "./Rows/Rows";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        setTimeout(this.getUsersFromApi, 1500);
    }

    startLoader = () => {
        this.setState({isLoading: true});
    };

    stopLoader = () => {
        this.setState({isLoading: false});
    };

    getUsersFromApi = async () => {
        try {
            this.startLoader();
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
            return this.setState({users: data});
        } catch (error) {
            console.log(error);
        } finally {
            this.stopLoader();
        }
    };

    render() {
        return (
            <div>
                {this.state.isLoading
                    ? <Loader/>
                    :
                    <div className="table">
                        <div className="header">
                            <Header/>
                        </div>
                        <div className="row">
                            <Rows users={this.state.users}/>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default MainPage;
