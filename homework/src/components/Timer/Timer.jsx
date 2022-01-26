import React from 'react';

const Timer = ({data}) => {
    return (
        <div className="timer">
            {Math.floor(data / 60)} : {Math.floor(data % 60)}
        </div>
    );
};

export default Timer;
