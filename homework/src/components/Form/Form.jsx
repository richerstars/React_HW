import React, {Component} from 'react';
import './Form.css';

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
            title: this.state.value,
            id: Date.now(),
            isChecked: false,
        });
        this.setState({value: ''});
    }

    render() {
        return (
            <div className="form">
                <input ref={this.inputRef} onChange={this.handleInputValue} value={this.state.value} placeholder='Here some text'/>
                <button disabled={!this.state.value.trim()} onClick={this.handleSubmitValue}>ADD</button>
            </div>
        );
    }
}

export default Form;
