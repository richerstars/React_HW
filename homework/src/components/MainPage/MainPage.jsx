import React, {Component} from 'react';
import axios from "axios";
import Loader from "../Loader/Loader";
import Header from "./Header/Header";
import Rows from "./Rows/Rows";
import "./MainPage.scss";

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

    parseArray = (array) => {
        return array.map(data => {
            return {
                name: data.name,
                username: data.username,
                email: data.email,
                phone: data.phone,
                website: data.website,
                address: data.address.city,
            }
        })
    }

    getUsersFromApi = async () => {
        try {
            this.startLoader();
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
            return this.setState({users: this.parseArray(data)});
        } catch (error) {
            console.log(error);
        } finally {
            this.stopLoader();
        }
    };

    render() {
        return (
            <>
                {this.state.isLoading
                    ? <Loader/>
                    :
                    <div className="table">
                        <div className="table-row-head">
                            <Header/>
                        </div>
                        <div className="table-row">
                            <Rows users={this.state.users}/>
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default MainPage;
