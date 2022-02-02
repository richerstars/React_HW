import React, {Component} from 'react';
import {StyledInput,StyledButton } from './styled';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    handleInputValue = (e) => this.setState({ value: e.target.value });

    handleSubmitValue = () => {
        this.props.addItem({
            value: this.state.value,
            id: Date.now(),
            isChecked: false,
        });
        this.setState({value: ''})
    }

    render() {
        return (
            <>
                <StyledInput ref={this.inputRef} onChange={this.handleInputValue} value={this.state.value} placeholder='Here some text'/>
                <StyledButton disabled={!this.state.value.trim()} onClick={this.handleSubmitValue}>ADD</StyledButton>
            </>
        );
    }
}

export default Form;