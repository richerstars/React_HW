import React from 'react';
import "./Button.scss";

const Button = ({text, actionButton, disabled}) => (<button  className="list" disabled={disabled} onClick={actionButton}>{text}</button>);

export default Button;
