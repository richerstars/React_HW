import React, {Component} from 'react';
import Form from "../Form/Form";
import Timer from "../Timer/Timer";
import Controls from "../Controls/Controls";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    addTimeToTimer = (value) => {
        this.setState({time: Number(value)})
    }

    stopTimer = () => {

    }
    startTimer = () => {

    }
    resetTimer = () => {
        this.setState({time: 0})
    }

    render() {
        return (
            <div>
                <h1>React timer</h1>
                <Form addTime={this.addTimeToTimer}/>
                <Timer data={this.state.time}/>
                <Controls stopTimer={this.stopTimer} startTimer={this.startTimer} resetTimer={this.resetTimer}/>
            </div>
        );
    }
}

export default MainPage;