import React, { Component } from 'react';
import TrackInfo from "./TrackInfo";
import ControlsClass from "./ControlsClass";
import Backdrop from "../ClassPlayer/Backdrop";

class Track extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isPlaying: false,
        };
        this.audioRef = React.createRef();
    }

    componentDidUpdate () {
        this.PlayPauseClick();
    }

    playTrack = () => this.setState({isPlaying: !this.state.isPlaying}, this.PlayPauseClick);

    PlayPauseClick = () => this.state.isPlaying ? this.audioRef.current.play() : this.audioRef.current.pause();


    playNewTrack = (nextSong = true) => {
        const {setTrackIndex, currentTrackIndex, tracks} = this.props;
        if (nextSong) {
            currentTrackIndex + 1 > tracks.length - 1
                ? setTrackIndex(0)
                : setTrackIndex(currentTrackIndex + 1);
        } else {
            currentTrackIndex - 1 < 0
                ? setTrackIndex(tracks.length - 1)
                : setTrackIndex(currentTrackIndex - 1);
        }
    }
    playPrevTrack = () => this.playNewTrack(false)

    render () {
        return (
            <>
            <div className="track-info">
                <TrackInfo {...this.props}/>
                <audio
                    ref={this.audioRef}
                    src={this.props.tracks[this.props.currentTrackIndex].audioSrc}
                />
                <ControlsClass
                    playPrevTrack={this.playPrevTrack}
                    isPlaying={this.state.isPlaying}
                    playTrack={this.playTrack}
                    playNewTrack={this.playNewTrack}
                />
            </div>
                <Backdrop
                    trackIndex={this.props.currentTrackIndex}
                    activeColor={this.props.tracks[this.props.currentTrackIndex].color}
                    isPlaying={this.state.isPlaying}
                />
            </>
        );
    }
}

export default Track;
