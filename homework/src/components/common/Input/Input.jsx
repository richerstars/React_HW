import React from 'react';

const Input = ({type, value, actionFunction, ...props}) => (
    <input
        min={props.min}
        max={props.max}
        step={props.step}
        type={type}
        value={value}
        onChange={actionFunction}
    />
);

export default Input;
