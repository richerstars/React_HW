import React from 'react';
import './Timer.css';
import constants from '../../constants/constants';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            now: constants.nowDate,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateData(),
            constants.timeToUpdate
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateData() {
        this.setState({
            now: new Date().getTime(),
            days: Math.floor((constants.countDownDate - this.state.now) / (1000 * 60 * 60 * 24)),
            hours: Math.floor(((constants.countDownDate - this.state.now) %
                (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor(((constants.countDownDate - this.state.now) % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor(((constants.countDownDate - this.state.now) % (1000 * 60)) / 1000),
        });
    }

    render() {
        return (
            <div className="main">
                <h1> New Year is coming!</h1>
                <h2>{this.state.days} : {this.state.hours} : {this.state.minutes} : {this.state.seconds}</h2>
            </div>
        );
    }
}

export default Timer;
