import React, { Component } from 'react';
import './MainLayout.css';
import Button from "../common/Button/Button";

class MainLayout extends Component {
    animationFrameID;

    constructor(props) {
        super(props);
        this.state = {
            ctx: null,
            color: null,
            x: 0,
            y: 0,
            inputValue: null,
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
        this.ctx.fillRect(0, 0, 400, 480);
    };
    cleanCanvasWithEraser = () => {this.setState({color: `#FFFFFF`});};

    clearCanvas = () => {
        this.ctx.fillStyle = `#FFFFFF`;
        this.ctx.fillRect(0, 0, 400, 480);
    };

    handleMouseMove = (e) => {this.setState({x: e.clientX - this.rect.x, y: e.clientY - this.rect.y});};

    drawWithMoveRect = () => {
        this.ctx.fillStyle = this.state.color;
        this.ctx.beginPath();
        this.ctx.fillRect(this.state.x, this.state.y, 2, 2);
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
                    <canvas width={400} height={480} ref={this.canvasRef} onMouseMove={this.handleMouseMove}/>
                    <div className="components">
                        <div className="input-range">
                            <input
                                type="range"
                                min="0" max="20"
                                step="1"
                                value={this.state.inputValue === null ? 1 : this.state.inputValue}
                                onChange={this.changeRangeValue}/>
                            <p> Your size of cursor: {this.state.inputValue === null ? 1 : this.state.inputValue}</p>
                        </div>
                        <div className="color-picker">
                            <p> Choose your color! </p>
                            <input
                                type="color"
                                value={this.state.color === null ? `#000000` : this.state.color}
                                onChange={this.changeColor}/>
                        </div>
                        <div className="buttons">
                            <Button text={"Fill canvas"} onClickAction={this.fillCanvas}/>
                            <Button text={"Eraser"} onClickAction={this.cleanCanvasWithEraser}/>
                            <Button text={"Clear"} onClickAction={this.clearCanvas}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainLayout;
