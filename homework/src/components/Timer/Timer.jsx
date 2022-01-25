import React, {Component} from 'react';

class Timer extends Component {

    componentDidMount() {
        this.timerID = setInterval(() => this.updateTimer(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateTimer = () => {
        this.setState({
            minutes: Math.floor(this.props.data / 60),
            seconds: Math.floor(this.props.data % 60),
        })
    }

    render() {
        return (
            <>
                <p>{this.state.minutes} : {this.state.seconds}</p>
            </>
        );
    }
}

export default Timer;