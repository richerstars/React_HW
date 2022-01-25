import React, {Component} from 'react';
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    handleInputValue = (e) => this.setState({value: e.target.value});

    handleSubmitValue = () => {
        this.props.addTime(this.state.value);
        this.setState({value: ''});
    }

    render() {
        return (
            <div>
                <Input
                    onChange={this.handleInputValue}
                    value={this.state.value}
                    placeholder="Enter your value"/>
                <Button
                    text="set"
                    disabled={!this.state.value.trim()}
                    actionButton={this.handleSubmitValue}/>
            </div>
        );
    }
}

export default Form;