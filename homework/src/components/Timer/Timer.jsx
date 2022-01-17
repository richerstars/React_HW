import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = () => {
    const [ days, setDays ] = useState( 0 );
    const [ hours, setHours ] = useState( 0 );
    const [ minutes, setMinutes ] = useState( 0 );
    const [ seconds, setSeconds ] = useState( 0 );

    const updateData = () => {
        const timeout = setInterval( () => {
            const countDownDate = new Date( 'Jan 1, 2023 00:00:00' ).getTime();
            const now = new Date().getTime();
            setDays( Math.floor( (countDownDate - now) / (1000 * 60 * 60 * 24) ) );
            setHours( Math.floor( ((countDownDate - now) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) ) );
            setMinutes( Math.floor( ((countDownDate - now) % (1000 * 60 * 60)) / (1000 * 60) ) );
            setSeconds( Math.floor( ((countDownDate - now) % (1000 * 60)) / 1000 ) );
        }, 1000 );
       return (()=>{
           clearInterval(timeout);
       })
    }

    useEffect( () => {
        updateData();
    } )
    return (
        <div className="main">
            <h1> New Year is coming!</h1>
            <h2>{ days } : { hours } : { minutes } : { seconds }</h2>
        </div>
    );
};

export default Timer;
