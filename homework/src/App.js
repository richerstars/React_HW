import React, { useRef,useState,useEffect } from "react";
import { StyledCanvas } from "./styled";
import {drawBall,updateBall} from "./AnimationBall";

const App = () => {
    const canvasRef = useRef(null);
    const requestAnimationRef = useRef(null);
    const [state, setState ] = useState({
        isRequestAnimation:true,
        balls: [],
    });

    const random =(min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const size = random(30, 80);
    const ballRef = useRef([
        { x: random(size, 800 - size), y: random(size, 800 - size), vx: random(-5, 5), vy: random(-5, 5), radius: random(0, 50), color: "#e10f0f"},
        { x: random(size, 800 - size), y: random(size, 800 - size), vx: random(-5, 5), vy: random(-5, 5), radius: random(0, 50), color: "#003bff"},
        { x: random(size, 800 - size), y: random(size, 800 - size), vx: random(-5, 5), vy: random(-5, 5), radius: random(0, 50), color: "#40bd18"},
    ]);

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
