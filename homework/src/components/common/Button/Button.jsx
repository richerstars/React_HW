import React from 'react';

const Button = ({text, actionButton, disabled}) => (<button disabled={disabled} onClick={actionButton}>{text}</button>);

export default Button;