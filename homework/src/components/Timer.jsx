import React, { useState } from 'react';
import '../styles/Timer.css';

const Timer = () => {
    const countDownDate = new Date( 'Jan 1, 2023 00:00:00' ).getTime();
    const [ days, setDays ] = useState( countDownDate );
    const [ hours, setHours ] = useState( countDownDate );
    const [ minutes, setMinutes ] = useState( countDownDate );
    const [ seconds, setSeconds ] = useState( countDownDate );

    function SetNewDate() {
        setInterval( () => {
            const now = new Date().getTime();
            setDays( Math.floor( (days - now) / (1000 * 60 * 60 * 24) ) );
            setHours( Math.floor( ((days - now) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) ) );
            setMinutes( Math.floor( ((days - now) % (1000 * 60 * 60)) / (1000 * 60) ) );
            setSeconds( Math.floor( ((days - now) % (1000 * 60)) / 1000 ) );
        }, 1000 );
    }

    return (
        <div className="main">
            <h1> New Year is coming!</h1>
            <h2>{ days } : { hours } : { minutes } : { seconds }</h2>
            <button onClick={ SetNewDate }>Start timer</button>
        </div>
    );
};

export default Timer;
