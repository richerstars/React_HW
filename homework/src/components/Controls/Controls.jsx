import React from 'react';
import Button from "../common/Button/Button";

const Controls = ({startTimer,stopTimer,resetTimer}) => {
    return (
        <div>
            <Button text="stop" actionButton={stopTimer}/>
            <Button text="start" actionButton={startTimer}/>
            <Button text="reset" actionButton={resetTimer}/>
        </div>
    );
};

export default Controls;