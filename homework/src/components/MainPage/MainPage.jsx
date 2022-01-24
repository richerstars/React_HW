import React, {Component} from 'react';
import axios from "axios";
import Button from "../common/Button";
import PhotoCard from "../PhotoCard/PhotoCard";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allPhotos: [],
            photos: [],
            page: 1,
        }
    }

    componentDidMount() {
        setTimeout(this.getApiData, 1000);
    }


    getApiData = async () => {
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100');
            return this.setState({allPhotos: data});
        } catch (error) {
            console.log(error);
        }
    }

    renderPhotos = () => {

    }

    render() {
        return (
            <div>
                <PhotoCard photos={this.state.photos}/>
                <div className="buttons">
                    <Button text='1' changePhotos={this.renderPhotos}/>
                    <Button text='2' changePhotos={this.renderPhotos}/>
                    <Button text='3' changePhotos={this.renderPhotos}/>
                    <Button text='4' changePhotos={this.renderPhotos}/>
                    <Button text='5' changePhotos={this.renderPhotos}/>
                </div>
            </div>
        );
    }
}

export default MainPage;