import React from 'react';

const Input = ({value,onChange, placeholder}) => {
    return (
        <input onChange={onChange} value={value} placeholder={placeholder} pattern="^[0-9]+$"/>
    );
};

export default Input;