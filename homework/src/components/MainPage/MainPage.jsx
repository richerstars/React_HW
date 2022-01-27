import React, {Component} from 'react';
import "./MainPage.scss";

class MainPage extends Component {
    frameCount = 0;
    animationFrameID;

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            ctx: null,
        }
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        this.ctx = this.canvasRef.current.getContext('2d');
        this.rect = this.canvasRef.current.getBoundingClientRect();
        // this.drawRect();
    }

    componentDidUpdate() {
        this.ctx = this.canvasRef.current.getContext('2d');
        this.loop();
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this.animationFrameID);
    }

    loop = () => {
        this.frameCount++;
        this.animationFrameID = window.requestAnimationFrame(this.loop)
        this.drawWithMoveRect();
    }

    drawRect = () => {
        this.ctx.fillStyle = "green";
        this.ctx.beginPath();
        this.ctx.fillRect(10, 10, 100, 100);
    }
    drawWithMoveRect = () => {
        this.ctx.fillStyle = "green";
        this.ctx.beginPath();
        this.ctx.fillRect(this.state.x, this.state.y, 10, 10);
    }
    handleMouseMove = (e) => {
        this.setState({x: e.clientX - this.rect.x, y: e.clientY - this.rect.y});
    }

    render() {
        return (
            <div>
                <canvas
                    width={300}
                    height={300}
                    ref={this.canvasRef}
                    onMouseMove={this.handleMouseMove}
                />
            </div>
        );
    }
}

export default MainPage;