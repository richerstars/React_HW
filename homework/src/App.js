import React, { useRef,useState,useEffect } from "react";
import { StyledCanvas } from "./styled";
import {drawBall,updateBall} from "./AnimationBall";

const App = () => {
    const canvasRef = useRef(null);
    const requestAnimationRef = useRef(null);
    const [state, setState ] = useState({
        isRequestAnimation:true,
        balls: [
            { x: Math.round(Math.random()* 800), y: Math.round(Math.random()* 800),
                speedX: Math.round(Math.random()* 5), speedY:  Math.round(Math.random()* 5),
                radius:  Math.round(Math.random()* 50), color: "#27ff00"},
            { x: Math.round(Math.random()* 800), y: Math.round(Math.random()* 800),
                speedX: Math.round(Math.random()* 5), speedY:  Math.round(Math.random()* 5),
                radius:  Math.round(Math.random()* 50), color: "#1e3ac5"},
            { x: Math.round(Math.random()* 800), y: Math.round(Math.random()* 800),
                speedX: Math.round(Math.random()* 5), speedY:  Math.round(Math.random()* 5),
                radius:  Math.round(Math.random()* 50), color: "#fc0000"},],
    });
    const ballRef = useRef(state.balls);
    const renderCanvas = () => {
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, 800, 800);
        const date = new Date();
        ballRef.current.forEach((ballElement => {
            updateBall(ballElement);
            drawBall(ctx, ballElement, date);
        }));
    };

    const tick = () => {
        if(state.isRequestAnimation){
            renderCanvas();
            requestAnimationRef.current = requestAnimationFrame(tick);
        } else {
            requestAnimationRef.current = setInterval(() => renderCanvas(), 1000);
        }
    };

    useEffect(() => {
        clearInterval(requestAnimationRef.current);
        cancelAnimationFrame(requestAnimationRef.current);
        tick();
    }, [state.isRequestAnimation]);

    const toggleAnimation = () => {setState((prevState) =>
        ({...prevState, isRequestAnimation: !state.isRequestAnimation}));};

    return (
        <>
            <StyledCanvas width={800} height={800} ref={canvasRef} />
            <button onClick={toggleAnimation}> Change Animation </button>
        </>
    );
};

export default App;
