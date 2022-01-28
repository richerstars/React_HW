import React, { Component } from 'react';
import '../../styles/styles.css';
import Track from "./Track";
import tracks from "../../tracks";

class AudioPlayerClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trackIndex: 0
        };
    }

    setTrackIndex = (trackId) => this.setState({trackIndex: trackId});

    render() {
        return (
            <div className="audio-player">
                <Track
                    currentTrackIndex={this.state.trackIndex}
                    setTrackIndex={this.setTrackIndex}
                    tracks={tracks}
                />
            </div>
        );
    }
}

export default AudioPlayerClass;
