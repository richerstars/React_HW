import React from 'react';

const Button = ({text, onClickAction}) => {
    return (
       <button onClick={onClickAction}>{text}</button>
    );
};

export default Button;
