import React, { Component } from 'react';

class Backdrop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.documentElement.style.setProperty("--active-color", this.props.activeColor);
    }

    componentDidUpdate() {
        document.documentElement.style.setProperty("--active-color", this.props.activeColor);
    }
    render() {
        return (
            <div className={`color-backdrop ${this.props.isPlaying ? "playing" : "idle"}`}/>
        );
    }
}

export default Backdrop;
