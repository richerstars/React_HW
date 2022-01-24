import React, { Component } from 'react';
import axios from "axios";
import Button from "../common/Button";
import PhotoCard from "../PhotoCard/PhotoCard";
import Loader from "../Loader/Loader";
import BigPhoto from "../BigPhoto/BigPhoto";
import constantsUrl from '../../constants/url';
import numberConst from "../../constants/numberConst";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allPhotos: [],
            bigPhoto: '',
            isLoading: true,
        };
    }

    componentDidMount() {
        setTimeout(this.getApiData, numberConst.timeout);
    }

    startLoader = () => {
        this.setState({isLoading: true});
    };

    stopLoader = () => {
        this.setState({isLoading: false});
    };

    getApiData = async () => {
        try {
            this.startLoader();
            const {data} = await axios.get(constantsUrl.url);
            this.setState({allPhotos: data});
            return this.renderPhotos(numberConst.start, numberConst.end);
        } catch (error) {
            console.log(error);
        } finally {
            this.stopLoader();
        }
    };

    renderPhotos = (fistElement, lastElement) => {
        this.setState({photos: []});
        this.setState({photos: this.state.allPhotos.slice(fistElement, lastElement)});
    };
    setPhotosByPage = (page) => {
        this.renderPhotos((page - 1) * numberConst.end, page * numberConst.end);
    };
    openBigPhoto = (link) => this.setState({bigPhoto: link});
    closeBigPhoto = () => this.setState({bigPhoto: ''});

    render() {
        return (
            <div>
                {this.state.isLoading
                    ? <Loader/>
                    :
                    <div>
                        {this.state.bigPhoto &&
                        <BigPhoto bigPhoto={this.state.bigPhoto} closeBigPhoto={this.closeBigPhoto}/>}
                        <PhotoCard photos={this.state.photos} getBigPhoto={this.openBigPhoto}/>
                        <div className="div-buttons">
                            <Button text="1" changePhotos={this.setPhotosByPage}/>
                            <Button text="2" changePhotos={this.setPhotosByPage}/>
                            <Button text="3" changePhotos={this.setPhotosByPage}/>
                            <Button text="4" changePhotos={this.setPhotosByPage}/>
                            <Button text="5" changePhotos={this.setPhotosByPage}/>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default MainPage;
