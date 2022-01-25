import React, { Component } from 'react';
import axios from "axios";
import PhotoCard from "../PhotoCard/PhotoCard";
import Loader from "../Loader/Loader";
import BigPhoto from "../BigPhoto/BigPhoto";
import constantsUrl from '../../constants/url';
import numberConst from "../../constants/numberConst";
import Pagination from "../Pagination/Pagination";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allPhotos: [],
            bigPhoto: '',
            isLoading: true,
            photos: [],
        };
    }

    componentDidMount() {
        setTimeout(this.getApiData, numberConst.timeout);
    }

    startLoader = () => this.setState({isLoading: true});

    stopLoader = () => this.setState({isLoading: false});

    getApiData = async () => {
        try {
            this.startLoader();
            const {data} = await axios.get(constantsUrl.url);
            this.setState({allPhotos: data});
            this.renderPhotos(numberConst.start, numberConst.end);
        } finally {
            this.stopLoader();
        }
    };

    renderPhotos = (fistElement, lastElement) => {
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
                    <div className="wrapper">
                        {this.state.bigPhoto &&
                        <BigPhoto bigPhoto={this.state.bigPhoto} closeBigPhoto={this.closeBigPhoto}/>}
                        <PhotoCard photos={this.state.photos} getBigPhoto={this.openBigPhoto}/>
                        <Pagination changePhotos={this.setPhotosByPage}/>
                    </div>
                }
            </div>
        );
    }
}

export default MainPage;
