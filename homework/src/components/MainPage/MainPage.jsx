import React, { Component } from 'react';
import axios from "axios";
import Loader from "../Loader/Loader";
import Header from "./Header/Header";
import Rows from "./Rows/Rows";
import "./MainPage.scss";
import numberConstants from "../constants/numberConstants";
import url from "../constants/url";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        setTimeout(this.getUsersFromApi, numberConstants.delay);
    }

    parseArray = (array) => {
        return array.map(data => {
            return {
                name: data.name,
                username: data.username,
                email: data.email,
                phone: data.phone,
                website: data.website,
                address: data.address.city,
            };
        });
    };

    getUsersFromApi = async () => {
        try {
            this.setState({isLoading: true});
            const {data} = await axios.get(url.GET_DATA);
            this.setState({users: this.parseArray(data)});
        } finally {
            this.setState({isLoading: false});
        }
    };

    render() {
        return (
            <>
                {this.state.isLoading
                    ? <Loader/>
                    :
                    <div className="table">
                        <div className="table-header-big">
                            <Header tableRowClass="table-row-two" itemClass="table-row-item"/>
                        </div>
                        <div className="table-row">
                            <Header itemClass="table-row-one-item"
                                    tableRowClass="table-row-one"/>
                            <Rows users={this.state.users}/>
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default MainPage;
