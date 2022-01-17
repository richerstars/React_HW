import React from 'react';
import './Timer.css';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            now: new Date().getTime(),
            countDownDate: new Date( 'Jan 1, 2023 00:00:00' ).getTime(),
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateData(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval( this.timerID );
    }

    updateData() {
        this.setState( {
            now: new Date().getTime(),
            days: Math.floor( (this.state.countDownDate-this.state.now) / (1000 * 60 * 60 * 24) ),
            hours: Math.floor( ((this.state.countDownDate-this.state.now) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) ),
            minutes: Math.floor( ((this.state.countDownDate-this.state.now) % (1000 * 60 * 60)) / (1000 * 60) ),
            seconds: Math.floor( ((this.state.countDownDate-this.state.now) % (1000 * 60)) / 1000 ),
        } );
    }

    render() {
        return (
            <div className="main">
                <h1> New Year is coming!</h1>
                <h2>{ this.state.days } : { this.state.hours } : { this.state.minutes } : { this.state.seconds }</h2>
            </div>
        );
    }
}

export default Timer;
