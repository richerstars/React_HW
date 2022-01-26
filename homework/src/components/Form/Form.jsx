import React, {Component} from 'react';
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import "./Form.scss";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    handleInputValue = (e) => this.setState({value: e.target.value.replace(/[^\d]/g, '')});

    handleSubmitValue = () => {
        this.props.addTime(this.state.value);
        this.setState({value: ''});
    }

    render() {
        return (
            <div className="form">
                <Input
                    onChange={this.handleInputValue}
                    value={this.state.value}
                    placeholder="Enter your value(seconds)"/>
                <Button
                    text="set"
                    disabled={!this.state.value.trim()}
                    actionButton={this.handleSubmitValue}/>
            </div>
        );
    }
}

export default Form;
