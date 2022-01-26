import React from 'react';
import Button from "../common/Button/Button";

const Controls = ({startTimer,stopTimer,resetTimer, disabledReset}) => {
    return (
        <div className="buttons">
            <Button text="start" actionButton={startTimer}/>
            <Button text="stop" actionButton={stopTimer}/>
            <Button text="reset" disabled={disabledReset} actionButton={resetTimer}/>
        </div>
    );
};

export default Controls;
