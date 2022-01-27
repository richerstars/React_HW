import React, {Component} from 'react';
import '../styles/styles.css';
import AudioControls from "./AudioControls";
import Backdrop from "./Backdrop";

class AudioPlayerClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: this.props.tracks,
            trackIndex: 0,
            trackProgress: 0,
            isPlaying: false,
            activeTrack: {},
        }
        this.audioRef = React.createRef(new Audio(this.state.activeTrack.audioSrc));
        this.intervalRef = React.createRef();
        this.isReady = React.createRef(false);
    }

    componentDidMount() {
        this.setState({activeTrack: {...this.props.tracks[this.state.trackIndex]}});
    }

    componentDidUpdate() {

    }

    startTimer = () => {
        clearInterval(this.intervalRef.current);

        this.intervalRef.current = setInterval(() => {
            if (this.audioRef.current.ended) {
                this.toNextTrack();
            } else {
                this.setState({trackProgress: this.audioRef.current.currentTime});
            }
        }, [1000]);
    };

    onScrub = (value) => {
        clearInterval(this.intervalRef.current);
        this.audioRef.current.currentTime = value;
        this.setState({trackProgress: this.audioRef.current.currentTime});
    };

    onScrubEnd = () => {
        if (!this.state.isPlaying) {
            this.setState({isPlaying: true});
        }
        this.startTimer();
    };

    toPrevTrack = () => {
        if (this.state.trackIndex - 1 < 0) {
            this.setState({trackIndex: this.state.tracks.length - 1})
        } else {
            this.setState({trackIndex: this.state.trackIndex - 1})
        }
    };

    toNextTrack = () => {
        if (this.state.trackIndex < this.state.tracks.length - 1) {
            this.setState({trackIndex: this.state.trackIndex + 1})
        } else {
            this.setState({trackIndex: 0 })
        }
    };

    render() {
        console.log(this.state.activeTrack);
        return (
            <div className="audio-player">
                <div className="track-info">
                    <img
                        className="artwork"
                        src={this.state.activeTrack.image}
                        alt={`track artwork for ${this.state.activeTrack.title} by ${this.state.activeTrack.artist}`}
                    />
                    <h2 className="title">{this.state.activeTrack.title}</h2>
                    <h3 className="artist">{this.state.activeTrack.artist}</h3>
                    <AudioControls
                        isPlaying={this.state.isPlaying}
                        onPrevClick={this.toPrevTrack}
                        onNextClick={this.toNextTrack}
                        onPlayPauseClick={this.setIsPlaying}
                    />
                    <input
                        type="range"
                        value={this.state.trackProgress}
                        step="1"
                        min="0"
                        // max={duration ? duration : `${duration}`}
                        className="progress"
                        onChange={(e) => this.onScrub(e.target.value)}
                        onMouseUp={this.onScrubEnd}
                        onKeyUp={this.onScrubEnd}
                        // style={{ background: trackStyling }}
                    />
                </div>
                <Backdrop
                    trackIndex={this.state.trackIndex}
                    activeColor={this.state.activeTrack.color}
                    isPlaying={this.state.isPlaying}
                />
            </div>
        );
    }
}

export default AudioPlayerClass;