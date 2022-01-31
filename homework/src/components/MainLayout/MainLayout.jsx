import React, { Component } from 'react';
import './MainLayout.css';
import Button from "../common/Button/Button";
import constants from "../constants/NumberConst";
import constText from "../constants/TextConst";
import Paragraph from "../common/Paragraph/Paragraph";
import Input from "../common/Input/Input";
import hexConst from "../constants/Hex";

class MainLayout extends Component {
    animationFrameID;

    constructor(props) {
        super(props);
        this.state = {
            ctx: null,
            color: null,
            x: 0,
            y: 0,
            inputValue: 1,
        };
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        this.ctx = this.canvasRef.current.getContext('2d');
        this.rect = this.canvasRef.current.getBoundingClientRect();
    }

    componentDidUpdate() {
        this.ctx = this.canvasRef.current.getContext('2d');
        this.loop();
    }

    changeColor = (e) => {this.setState({color: e.target.value});};

    fillCanvas = () => {
        this.ctx.fillStyle = this.state.color;
        this.ctx.fillRect(constants.START_POS_X, constants.START_POS_Y, constants.WIDTH_CANVAS, constants.HEIGHT_CANVAS);
    };
    cleanCanvasWithEraser = () => {this.setState({color: hexConst.COLOR_WHITE});};

    clearCanvas = () => {
        this.ctx.fillStyle = hexConst.COLOR_WHITE;
        this.ctx.fillRect(constants.START_POS_X, constants.START_POS_Y, constants.WIDTH_CANVAS, constants.HEIGHT_CANVAS);
    };

    handleMouseMove = (e) => {this.setState({x: e.clientX - this.rect.x, y: e.clientY - this.rect.y});};

    drawWithMoveRect = () => {
        this.ctx.fillStyle = this.state.color;
        this.ctx.beginPath();
        this.ctx.lineWidth = this.state.inputValue;
        this.ctx.fillRect(this.state.x, this.state.y, this.state.inputValue, this.state.inputValue);
    };

    loop = () => {
        this.animationFrameID = window.requestAnimationFrame(this.loop);
        this.drawWithMoveRect();
    };

    changeRangeValue = (e) => {this.setState({inputValue: e.target.value});};

    render() {
        return (
            <div className="main-wrapper">
                <div className="content">
                    <canvas
                        width={constants.WIDTH_CANVAS}
                        height={constants.HEIGHT_CANVAS}
                        ref={this.canvasRef}
                        onMouseMove={this.handleMouseMove}/>
                    <div className="components">
                        <div className="input-range">
                            <Input
                                type={constText.TYPE_INPUT_RANGE}
                                value={this.state.inputValue}
                                actionFunction={this.changeRangeValue}
                                min={constants.MIN_RANGE}
                                max={constants.MAX_RANGE}
                                step={constants.STEP_INPUT}/>
                            <Paragraph text={constText.TEXT_INPUT} value={this.state.inputValue}/>
                        </div>
                        <div className="color-picker">
                            <Paragraph text={constText.TEXT_COLOR}/>
                            <Input type={constText.TYPE_INPUT_COLOR}
                                   value={this.state.color === null ? hexConst.COLOR_DEFAULT : this.state.color}
                                   actionFunction={this.changeColor}/>
                        </div>
                        <div className="buttons">
                            <Button text={constText.FILL_TEXT} onClickAction={this.fillCanvas}/>
                            <Button text={constText.ERASER} onClickAction={this.cleanCanvasWithEraser}/>
                            <Button text={constText.CLEAR} onClickAction={this.clearCanvas}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainLayout;
