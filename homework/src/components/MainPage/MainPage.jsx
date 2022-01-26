import React, { Component } from 'react';
import Form from "../Form/Form";
import Timer from "../Timer/Timer";
import Controls from "../Controls/Controls";
import constants from "../../constants/NumberConstants";
import "./MainPage.scss";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            disabledReset: true,
        };
    }

    addTimeToTimer = (value) => {this.setState({time: Number(value)});};

    startTimer = () => {
        if (this.state.time === 0) {
            this.setState({disabledReset: true});
        } else {
            this.timerID = setInterval(() => this.updateData(), constants.timeUpdate);
            this.setState({disabledReset: false});
        }
    };

    stopTimer = () => {clearInterval(this.timerID);};

    resetTimer = () => {
        this.stopTimer();
        this.setState({time: constants.defaultTime, disabledReset: true});
    };

    updateData = () => {this.setState({time: this.state.time - 1});};

    render() {
        return (
            <div className="mainWrapper">
                <h1>React timer</h1>
                <Form addTime={this.addTimeToTimer}/>
                <Timer data={this.state.time}/>
                <Controls stopTimer={this.stopTimer} startTimer={this.startTimer}
                          disabledReset={this.state.disabledReset} resetTimer={this.resetTimer}/>
            </div>
        );
    }
}

export default MainPage;
